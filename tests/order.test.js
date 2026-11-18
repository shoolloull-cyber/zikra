import test from 'node:test';
import assert from 'node:assert/strict';
import {sanitizeCart,totals,validateCustomer,normalizePhone,orderMessage} from '../src/order.js';
import {products,shipping} from '../src/catalog.js';
const customer={name:'أحمد محمد',phone:'٠١٥٠٠٥٧٣٨٨٣',address:'شارع النصر، عمارة ١، شقة ٥',governorate:'القاهرة',payment:'instapay',accepted:true};
test('27 unique governorates with valid shipping',()=>{assert.equal(Object.keys(shipping).length,27);assert.ok(Object.values(shipping).every(x=>Number.isFinite(x)&&x>=0))});
test('cart discards corrupt, unknown, duplicate and sold-out items; caps quantities',()=>{assert.deepEqual(sanitizeCart(null),[]);assert.deepEqual(sanitizeCart([{id:'bad',quantity:2},{id:'men1',quantity:-1},{id:'men1',quantity:999},{id:'men1',quantity:2}]),[{id:'men1',quantity:20}]);products[0].soldOut=true;assert.deepEqual(sanitizeCart([{id:'men1',quantity:1}]),[]);products[0].soldOut=false});
test('totals use current prices and selected governorate',()=>{const result=totals([{id:'men1',quantity:2},{id:'women1',quantity:1}],'القاهرة');assert.equal(result.total,products[0].price*2+products[2].price+60);assert.equal(totals([{id:'men1',quantity:1}],'').total,null)});
test('Egyptian numbers normalize and invalid forms fail',()=>{assert.equal(normalizePhone('+20 1500573883'),'01500573883');assert.deepEqual(validateCustomer(customer),{});assert.equal(Object.keys(validateCustomer({...customer,name:'',phone:'123',address:'',governorate:'invalid',payment:'cash',accepted:false})).length,6)});
test('message includes customer, quantity, shipping and unconfirmed payment',()=>{const message=orderMessage(customer,[{id:'men1',quantity:2}],'ZK-TEST');for(const text of ['ZK-TEST','أحمد محمد','01500573883','007','× 2','890','بانتظار مراجعة الدفع'])assert.ok(message.includes(text));assert.throws(()=>orderMessage(customer,[],'test'))});
import {giftSelections,giftDescription} from '../src/order.js';
test('matching testers follow bottle quantities and extra samples follow thresholds',()=>{
 for(const quantity of [1,2,3,5]){const cart=[{id:'men1',quantity}];assert.equal(giftSelections(cart).length,quantity===1?1:2);assert.ok(giftDescription(cart,[],'en').includes(`007 — ${quantity} × 2 ml`));}
 assert.deepEqual(giftSelections([]),[]);
 assert.deepEqual(giftSelections([{id:'men1',quantity:2}],['women1','bad']),['women1','random']);
 const message=orderMessage({...customer,gifts:['women1','random']},[{id:'men1',quantity:2}],'ZK-GIFT','en');assert.ok(message.includes('4 × 2 ml — FREE'));assert.ok(message.includes('2 WILD — 2 ml'));assert.ok(message.includes('Total: 890 EGP'));
});
test('formatted messages preserve masked recipient and item totals in both languages',()=>{for(const lang of ['ar','en']){const message=orderMessage({...customer,payment:'wallet'},[{id:'men2',quantity:2},{id:'men1',quantity:1},{id:'unisex2',quantity:1}],'ZK-FORMAT',lang);assert.ok(message.includes('```غرام ه*** ع***```'));assert.ok(message.includes('1,030'));assert.ok(message.includes('1,980'));assert.ok(message.includes('*Mambo No.05*'));assert.ok(message.includes('01500573883'));assert.ok(message.includes(lang==='ar'?'*05 · بيانات الدفع*':'*05 · PAYMENT DETAILS*'));}});
