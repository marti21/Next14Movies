'use client'

import { useTranslation } from 'next-i18next';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = i18n.language;

  function handleLanguage(selectedLanguage:string){
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${selectedLanguage};expires=${expires};path=/`;

    router.push(
      currentPathname.replace(`/${currentLocale}`, `/${selectedLanguage}`)
    );

    router.refresh();
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          {t('language')}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions">
        <DropdownItem onClick={() => handleLanguage('es')} endContent="es" className={currentLocale === "es" ? "bg-[#EAC696]" : ""}> Español </DropdownItem>
        <DropdownItem onClick={() => handleLanguage('en')} endContent="en" className={currentLocale === "en" ? "bg-[#EAC696]" : ""}> Ingles </DropdownItem>
        <DropdownItem onClick={() => handleLanguage('ca')} endContent="ca" className={currentLocale === "ca" ? "bg-[#EAC696]" : ""}> Catalán </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
