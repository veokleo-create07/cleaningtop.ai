import type {Metadata} from 'next';import '@fontsource-variable/manrope';import './globals.css';
export const metadata:Metadata={title:'TopClean Gebäudeservice',description:'Cleaning for offices, practices and managed properties in Lübeck.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
