import Home from '@/components/Home';import {notFound,redirect} from 'next/navigation';import type {Metadata} from 'next';
export function generateStaticParams(){return [{locale:'en'}]}
export async function generateMetadata():Promise<Metadata>{return {title:'TopClean Building Services | Lübeck',description:'Cleaning for offices, practices and managed properties in Lübeck.'}}
export default async function Page({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(locale==='de')redirect('/en');if(locale!=='en')notFound();return <Home locale="en"/>}
