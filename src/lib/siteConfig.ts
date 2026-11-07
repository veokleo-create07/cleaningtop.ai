export const siteConfig={name:'TopClean Gebäudeservice',phone:'+49 176 23483923',phoneHref:'tel:+4917623483923',email:'info@topcleannord.de',address:'Schwartauer Allee 99, 23554 Lübeck',domain:'topcleannord.de'} as const;
export type Locale='de'|'en';
export const t=(locale:Locale,de:string,en:string)=>locale==='de'?de:en;
