import React,{useRef,useState} from 'react';
import {ChevronLeft,ChevronRight} from 'lucide-react';
import {useLanguage} from './Language';
export default function ProductGallery({product,onOpen}){
 const {lang}=useLanguage(),[index,setIndex]=useState(0),start=useRef(null),swiped=useRef(false);
 const images=[product.image,...(product.gallery||[])];
 const move=delta=>setIndex(n=>(n+delta+images.length)%images.length);
 return <div className={`product-gallery ${onOpen?'gallery-card':'gallery-detail'}`} dir="ltr" onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();move(1)}if(e.key==='ArrowLeft'){e.preventDefault();move(-1)}}}>
 <div className="gallery-stage" onPointerDown={e=>{start.current={x:e.clientX,y:e.clientY};swiped.current=false}} onPointerUp={e=>{if(!start.current)return;const dx=e.clientX-start.current.x,dy=e.clientY-start.current.y;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){swiped.current=true;move(dx<0?1:-1)}start.current=null}} onPointerCancel={()=>{start.current=null}}>
 <button className="gallery-photo" onClick={()=>{if(!swiped.current&&onOpen)onOpen();swiped.current=false}} aria-label={lang==='en'?`${onOpen?'View fragrance':'Next photo'} — ${product.name}`:`${onOpen?'اكتشف العطر':'الصورة التالية'} — ${product.name}`} onClickCapture={()=>{if(!onOpen&&!swiped.current)move(1)}}><img key={index} src={`/images/${images[index]}`} alt={`${product.name} — ${index+1} / ${images.length}`} loading="lazy" draggable="false"/></button>
 <button className="gallery-arrow previous" onClick={()=>move(-1)} aria-label={lang==='en'?'Previous photo':'الصورة السابقة'}><ChevronLeft size={16}/></button><button className="gallery-arrow next" onClick={()=>move(1)} aria-label={lang==='en'?'Next photo':'الصورة التالية'}><ChevronRight size={16}/></button>
 </div><div className="gallery-dots" aria-label={lang==='en'?'Product photos':'صور المنتج'}>{images.map((src,i)=><button key={src} aria-label={lang==='en'?`Photo ${i+1} of ${images.length}`:`الصورة ${i+1} من ${images.length}`} aria-pressed={index===i} onClick={()=>setIndex(i)}><span/></button>)}</div></div>
}
