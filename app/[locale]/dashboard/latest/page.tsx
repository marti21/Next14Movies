import Image from 'next/image'
import Link from 'next/link'

import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/ui/TranslationsProvider';
const i18nNamespaces = ['latest'];

export default async function Latest({ params: {locale} }:  {params: { locale:string }}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
    namespaces={i18nNamespaces}
    locale={locale}
    resources={resources}>
      <main className="flex flex-col items-center justify-start p-24 flex-1">

      <h1>{t('latest')}</h1>

      <Link href="/" className='bg-red-200 rounded-md p-1 border-2 border-solid border-blue-200 hover:bg-yellow-200 hover:border-dashed hover:border-red-200'>Home</Link>

      </main>
    </TranslationsProvider>
  )
}