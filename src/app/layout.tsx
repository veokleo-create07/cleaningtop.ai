import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'TopClean Gebäudeservice',description:'Gebäudereinigung für Büros, Praxen und betreute Immobilien in Lübeck.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="de"><body>{children}</body></html>}
