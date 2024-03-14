import React from "react"
import Head from 'next/head'
import Script from 'next/script'
import { Inter } from "next/font/google"
import { NextFont } from "next/dist/compiled/@next/font"
import "./globals.css"

const inter: NextFont = Inter({subsets: ["latin"]});

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html suppressHydrationWarning>
            <Head>
                <link rel="shortcut icon" href="favicon.ico" />
            </Head>

            <body className={`${inter.className} bg-secondary`} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
