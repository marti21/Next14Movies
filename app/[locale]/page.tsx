import FormLogin from "../ui/login/FormLogin";
import initTranslations from '../i18n';
import TranslationsProvider from '../ui/TranslationsProvider';
const i18nNamespaces = ['login'];

export default async function Home({params: {locale}}:  {params: { locale:string }}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
        <FormLogin></FormLogin>
    </TranslationsProvider>
  )
}