import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Abraham Jonathan | Mobile Engineer",description:"Portfolio of Abraham Jonathan — Mobile Engineer building fintech and mobile experiences with React Native, TypeScript and Kotlin."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}