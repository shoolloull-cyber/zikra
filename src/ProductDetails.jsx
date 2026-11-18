import {useLanguage} from './Language';
import React, {useState} from 'react';
import {Plus, Minus, ArrowUpLeft, Flag, ShoppingBag} from 'lucide-react';
import ProductGallery from './ProductGallery';
import {fragranceDetailsAr} from './fragranceDetailsAr';
import {fragranceDetails} from './fragranceDetails';


export default function ProductDetails({product,quantityInCart,onAdd}) {
 const {t,lang,dir,money}=useLanguage();
  const [quantity,setQuantity]=useState(1);
  const detail=lang==='ar'?fragranceDetailsAr[product.id]:fragranceDetails[product.id];
  const available=Math.max(0,20-quantityInCart);
  const amount=Math.min(quantity,available);
  const disabled=product.soldOut||available===0;
  return <div className="fragrance-layout" dir="ltr">
    <div className="fragrance-visual"><div className="fragrance-image-frame"><span className="fragrance-edition">{t("THE ZIKRA COLLECTION")}</span><ProductGallery product={product}/><span className="fragrance-signature">{t("a lasting memory.")}</span></div><div className="fragrance-image-caption"><span>{t(product.category.toUpperCase())}</span><span>{t("أو دو بارفان")} · {product.size} {t("مل")}</span></div></div>
    <div className="fragrance-copy" lang={lang} dir={dir}><div className="fragrance-topline"><span className="eyebrow">{t("YOUR NEXT SIGNATURE")}</span><span className={`stock-label ${product.soldOut?'unavailable':''}`}>{product.soldOut?t("SOLD OUT"):t("AVAILABLE")}</span></div><h3>{product.name}</h3><div className="fragrance-price" dir={dir}><div className="fragrance-price-group"><div className="fragrance-price-main"><strong className="price-current"><bdi>{money(product.price)}</bdi></strong>{product.originalPrice && <span className="sale-pill">{lang==='en'?'SALE':'خصم'}</span>}</div>{product.originalPrice && <div className="fragrance-price-sub"><span className="price-was-text">{lang==='en'?'Was ':'بدل '}</span><s className="price-old"><bdi>{money(product.originalPrice)}</bdi></s><span className="save-amount">({lang==='en'?`Save ${product.originalPrice-product.price} EGP`:`وفرت ${product.originalPrice-product.price} ج.م`})</span></div>}</div><span>{product.size} {t("مل")} / {t("أو دو بارفان")}</span></div>
      <p className="product-reference" dir="ltr"><span className="inspired-label">Inspired by </span>{fragranceDetails[product.id]?.reference}</p>{detail&&<><div className="fragrance-story">{detail.headline&&<h4>{detail.headline}</h4>}{detail.paragraphs.map((text,index)=><p key={index}>{text}</p>)}</div><div className="fragrance-notes"><span className="eyebrow">{t("SCENT NOTES")}</span><ul>{detail.notes.map(note=><li key={note}>{note}</li>)}</ul></div><div className="fragrance-flags"><div className="fragrance-flag green"><span><Flag size={14}/> {t("GREEN FLAG")}</span><p>{detail.green}</p></div><div className="fragrance-flag red"><span><Flag size={14}/> {t("RED FLAG")}</span><p>{detail.red}</p></div></div></>}
      <div className="fragrance-purchase" dir={dir}><div className="fragrance-buy-row"><div className="quantity-control"><button disabled={disabled||amount<=1} onClick={()=>setQuantity(n=>Math.max(1,n-1))} aria-label={t("تقليل الكمية")}><Minus size={15}/></button><span aria-live="polite">{disabled?0:amount}</span><button disabled={disabled||amount>=available} onClick={()=>setQuantity(n=>Math.min(available,n+1))} aria-label={t("زيادة الكمية")}><Plus size={15}/></button></div><button className="primary" disabled={disabled} onClick={()=>onAdd(product,amount)}><ShoppingBag size={17}/>{product.soldOut?t("غير متوفر حاليًا"):available===0?t("وصلت للحد الأقصى"):t("أضف إلى السلة")}<ArrowUpLeft size={17}/></button></div><p>{disabled?t("يمكنك استكمال التصفح واكتشاف باقي العطور."):lang==='en'?`Total ${money(product.price*amount)} · Delivery calculated at checkout`:`الإجمالي ${money(product.price*amount)} · الشحن يُحسب عند اختيار المحافظة`}</p></div>
    </div>
  </div>;
}
