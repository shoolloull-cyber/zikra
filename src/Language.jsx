import React,{createContext,useContext,useEffect,useState} from 'react';
import {translate} from './translations';
import {money as formatMoney} from './order';
const LanguageContext=createContext(null);
export function LanguageProvider({children}){
 const [lang,setLang]=useState(()=>{try{return localStorage.getItem('zikra-language')==='ar'?'ar':'en'}catch{return 'en'}});
 const dir=lang==='ar'?'rtl':'ltr';
 useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dir=dir;document.title=lang==='ar'?'ذكري | عطور تترك أثرًا':'ZIKRA | A scent that stays';try{localStorage.setItem('zikra-language',lang)}catch{}},[lang,dir]);
 return <LanguageContext.Provider value={{lang,dir,setLang,t:text=>translate(text,lang),money:value=>formatMoney(value,lang)}}>{children}</LanguageContext.Provider>;
}
export const useLanguage=()=>useContext(LanguageContext);
