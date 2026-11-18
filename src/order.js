import {products,shipping,store} from './catalog.js';
import {translate} from './translations.js';
export const money = (value,lang='ar') => `${new Intl.NumberFormat('en-EG').format(value)} ${lang==='en'?'EGP':'ج.م'}`;
export function sanitizeCart(value) {
  if (!Array.isArray(value)) return [];
  const seen = new Set();
  return value.filter(x => x && products.some(p=>p.id===x.id&&!p.soldOut)&&Number.isInteger(x.quantity)&&x.quantity>0&&!seen.has(x.id)&&(seen.add(x.id),true)).map(x=>({id:x.id,quantity:Math.min(x.quantity,20)}));
}
export const normalizePhone = phone => phone.replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[\s()-]/g,'').replace(/^\+?20/,'0');
export function validateCustomer(data) {
  const errors={};
  if(data.name.trim().length<3) errors.name='اكتب اسم العميل، ٣ حروف على الأقل.';
  if(!/^01[0125]\d{8}$/.test(normalizePhone(data.phone))) errors.phone='اكتب رقم موبايل مصري صحيح من ١١ رقم.';
  if(!Object.hasOwn(shipping,data.governorate)) errors.governorate='اختار المحافظة لحساب الشحن.';
  if(data.address.trim().length<10) errors.address='اكتب المنطقة والشارع ورقم العمارة والشقة.';
  if(!['wallet'].includes(data.payment)) errors.payment='اختار طريقة الدفع.';
  if(!data.accepted) errors.accepted='لازم توافق على إرسال البيانات ومراجعة إثبات الدفع.';
  return errors;
}
export function totals(cart,governorate) {
  const items=sanitizeCart(cart).map(item=>({...products.find(p=>p.id===item.id),quantity:item.quantity}));
  const subtotal=items.reduce((sum,p)=>sum+p.price*p.quantity,0);
  const delivery=Object.hasOwn(shipping,governorate)?shipping[governorate]:null;
  return {items,subtotal,delivery,total:delivery===null?null:subtotal+delivery};
}
export function samplePlan(cart){
 const items=sanitizeCart(cart);
 const mandatory=items.map(p=>({...p,name:products.find(x=>x.id===p.id).name}));
 const count=items.reduce((n,p)=>n+p.quantity,0);
 return {mandatory,count,optionalCount:count===0?0:count===1?1:2};
}
export function giftSelections(cart,gifts=[]) {
 const {optionalCount}=samplePlan(cart);
 return Array.from({length:optionalCount},(_,index)=>products.some(p=>p.id===gifts[index]&&!p.soldOut)?gifts[index]:'random');
}
export function giftDescription(cart,gifts,lang='en') {
 const {mandatory}=samplePlan(cart),en=lang==='en';
 return [en?'Matching testers (included automatically):':'تيسترات مطابقة (تضاف تلقائيًا):',...mandatory.map(p=>`${p.name} — ${p.quantity} × 2 ${en?'ml':'مل'}`),'',en?'Your extra samples:':'عيناتك الاختيارية:',...giftSelections(cart,gifts).map((id,index)=>`${index+1}. ${id==='random'?(en?"Store's surprise selection":'اختيار عشوائي من المتجر'):products.find(p=>p.id===id).name} — 2 ${en?'ml':'مل'}`)].join('\n');
}
export function orderMessage(data,cart,reference,lang='ar') {
  const {items,subtotal,delivery,total}=totals(cart,data.governorate);
  if(!items.length||Object.keys(validateCustomer(data)).length) throw new Error('Invalid order');
  const en=lang==='en';
  const cash=value=>money(value,lang);
  const heading=(english,arabic)=>`*${en?english:arabic}*`;
  const recipient='```'+store.recipientName+'```';
  return [
    heading('ZIKRA · ORDER','ذكري · طلب جديد'),
    `${en?'Order reference':'رقم الطلب'}: ${reference}`,
    en?'Status: awaiting payment verification':'الحالة: بانتظار مراجعة الدفع',
    '',heading('01 · DELIVERY DETAILS','01 · بيانات التوصيل'),
    `${en?'Name':'الاسم'}: ${data.name.trim()}`,
    `${en?'Mobile':'الموبايل'}: ${normalizePhone(data.phone)}`,
    `${en?'Governorate':'المحافظة'}: ${translate(data.governorate,lang)}`,
    `${en?'Address':'العنوان'}: ${data.address.trim()}`,
    '',heading('02 · YOUR FRAGRANCES','02 · العطور المطلوبة'),
    ...items.flatMap((p,index)=>[
      `${index+1}. *${p.name}*`,
      `   ${p.size} ${en?'ml':'مل'} × ${p.quantity} · ${en?'Unit price':'سعر القطعة'}: ${cash(p.price)}`,
      `   ${en?'Line total':'إجمالي الصنف'}: ${cash(p.price*p.quantity)}`,
      ''
    ]),
    heading('03 · COMPLIMENTARY SAMPLES','03 · عيناتك الهدية'),
    en?`${samplePlan(cart).count+samplePlan(cart).optionalCount} × 2 ml — FREE`:`${samplePlan(cart).count+samplePlan(cart).optionalCount} × 2 مل — مجانًا`,
    giftDescription(cart,data.gifts,lang),
    '',heading('04 · ORDER TOTAL','04 · ملخص الحساب'),
    `${en?'Fragrances':'المنتجات'}: ${cash(subtotal)}`,
    `${en?'Delivery':'الشحن'}: ${cash(delivery)}`,
    `*${en?'Total':'الإجمالي'}: ${cash(total)}*`,
    '',heading('05 · PAYMENT DETAILS','05 · بيانات الدفع'),
    `${en?'Payment method':'طريقة الدفع'}: ${en?'Mobile wallet':'محفظة إلكترونية'}`,
    `${en?'Transfer number':'رقم التحويل'}: ${store[data.payment]}`,
    `${en?'Recipient name':'اسم المستلم'}: ${recipient}`,
    en?'Match the recipient name and number before confirming your transfer.':'طابق اسم المستلم والرقم قبل تأكيد التحويل.',
    '',heading('PAYMENT CONFIRMATION','تأكيد الدفع'),
    en?'I will attach the transfer receipt in this chat. Preparation starts after payment and receipt verification.':'سأرفق صورة إيصال التحويل في نفس المحادثة. يبدأ تجهيز الطلب بعد مراجعة وصول المبلغ وإثبات الدفع.',
    '',heading('TRY BEFORE OPENING','جرّب قبل ما تفتح'),
    en?'Try the matching sample first. Keep the full-size bottle unopened and its packaging intact if requesting a return.':'جرّب العينة المطابقة أولًا. احتفظ بالعبوة الأساسية مغلقة وبتغليفها السليم لو هتطلب إرجاعها.'
  ].join('\n');
}
