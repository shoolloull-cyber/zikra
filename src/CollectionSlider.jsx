import {useLanguage} from './Language';
import React, {useEffect, useRef, useState} from 'react';
import {ArrowLeft, ArrowRight, ArrowUpLeft, MoveHorizontal} from 'lucide-react';
import {categories} from './catalog';

export default function CollectionSlider({onSelect}) {
 const {t,lang,dir,money}=useLanguage();
  const viewport = useRef(null);
  const interaction = useRef({until:0, down:false, moved:false, x:0, start:0, mouse:false});
  const [dragging,setDragging] = useState(false);
  const ordered = [...categories.slice(1),categories[0]];
  const pause = () => { interaction.current.until = performance.now()+3500; };
  useEffect(()=>{
    const el=viewport.current, media=matchMedia('(prefers-reduced-motion: reduce)');
    let frame, last=0, position=0, previous=0;
    const width=()=>el.querySelector('.collection-group').getBoundingClientRect().width;
    el.scrollLeft=width();
    position=previous=el.scrollLeft;
    function tick(time){
      const delta=Math.min(time-last||0,40);last=time;
      const state=interaction.current;
      if(!media.matches&&!document.hidden&&!state.down&&time>state.until&&!el.querySelector(':focus-visible')){
        if(Math.abs(el.scrollLeft-previous)>1)position=el.scrollLeft;
        position+=delta*.022;
        el.scrollLeft=position;
        previous=el.scrollLeft;
      }else{position=previous=el.scrollLeft;}
      frame=requestAnimationFrame(tick);
    }
    frame=requestAnimationFrame(tick);
    return()=>cancelAnimationFrame(frame);
  },[]);
  function wrap(){
    const el=viewport.current;
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const width=el.querySelector('.collection-group').getBoundingClientRect().width;
    if(el.scrollLeft<width*.25)el.scrollLeft+=width;
    else if(el.scrollLeft>width*2.25)el.scrollLeft-=width;
  }
  function down(e){
    if(e.button!==0)return;
    pause(); const state=interaction.current;
    Object.assign(state,{down:true,moved:false,x:e.clientX,start:viewport.current.scrollLeft,mouse:e.pointerType==='mouse'});
  }
  function move(e){
    const state=interaction.current;if(!state.down)return;
    if(Math.abs(e.clientX-state.x)>7)state.moved=true;
    if(state.mouse&&state.moved){
      viewport.current.setPointerCapture(e.pointerId);
      setDragging(true);
      // Incremental movement remains continuous when the loop wraps.
      viewport.current.scrollLeft-=e.clientX-state.x;
      state.x=e.clientX;
    }
  }
  function up(e){
    interaction.current.down=false;pause();setDragging(false);
    if(viewport.current.hasPointerCapture(e.pointerId))viewport.current.releasePointerCapture(e.pointerId);
  }
  function nudge(direction){pause();const el=viewport.current;el.scrollBy({left:direction*(el.querySelector('.collection-tile').offsetWidth+16),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
  return <section className="collections" id="collections" aria-label={t("مجموعات العطور")}>
    <div className="strip-heading"><span>{t("FIND YOUR SIGNATURE")}</span><div className="slider-tools"><span><MoveHorizontal size={15}/> {t("اسحب واكتشف")}</span><button aria-label={t("الأقسام السابقة")} onClick={()=>nudge(-1)}><ArrowLeft size={17}/></button><button aria-label={t("الأقسام التالية")} onClick={()=>nudge(1)}><ArrowRight size={17}/></button></div></div>
    <div ref={viewport} className={`collection-window swipe-window ${dragging?'is-dragging':''}`} onScroll={wrap} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onWheel={pause} onFocusCapture={pause} onClickCapture={e=>{if(interaction.current.moved){e.preventDefault();e.stopPropagation();interaction.current.moved=false;}}}>
      <div className="collection-track">{[0,1,2,3].map(copy=><div className="collection-group" key={copy} aria-hidden={copy!==1?true:undefined}>{ordered.map((c,index)=><button key={c.id} tabIndex={copy===1?0:-1} className="collection-tile" onClick={()=>onSelect(c.id)}><span className="collection-index">ZIKRA / {String(index+1).padStart(2,'0')}</span><span className="collection-name">{t(c.name)}</span><span className="tile-bottom">{t(c.arabic)}<ArrowUpLeft size={20}/></span></button>)}</div>)}</div>
    </div>
  </section>;
}
