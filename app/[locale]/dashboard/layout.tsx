import type { Metadata } from 'next'
import '../../ui/globals.css'
import { inter } from '../../ui/fonts'
import { Section } from '../../ui/dashboard/Section'
import initTranslations from '../../i18n';
import TranslationsProvider from '../../ui/TranslationsProvider';
import LanguageSelector from '@/app/ui/LanguageSelector'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
}

const i18nNamespaces = ['sidebar'];

export default async function RootLayout({
  children, params: {locale} 
}: {
  children: React.ReactNode, params: {locale:string} 
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
    namespaces={i18nNamespaces}
    locale={locale}
    resources={resources}>
      <div className={`min-h-screen flex flex-col ${inter.className}`}>
      <header className='h-[100px] min-w-screen bg-[#ffab03]'>
        <LanguageSelector></LanguageSelector>
      </header>

      <div className='flex flex-row'>
        <Section></Section>

        {children}
      </div>

    </div>
    </TranslationsProvider>
  )
}