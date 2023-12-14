import type { Metadata } from 'next'
import '../ui/globals.css'
import { inter } from '../ui/fonts'
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import {Providers} from "../providers";

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login movie center',
}

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({children, params: { locale } }: { children: React.ReactNode, params: { locale:string }}) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  )
}
