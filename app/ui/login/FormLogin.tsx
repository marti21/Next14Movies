'use client'

import Image from "next/image";
import logo from "../../../public/logo.png"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import {Input} from "@nextui-org/input";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import {Checkbox} from "@nextui-org/react";

export default function FormLogin(){
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-screen h-screen relative">
      <div className="absolute w-full h-full bg-cover bg-[url('https://img.freepik.com/vector-gratis/fondo-geometrico-degradado_52683-54199.jpg?w=1800&t=st=1702369930~exp=1702370530~hmac=b724bf10feee15aa146d356cc2a9f8c0f77e4ddee01dc47ce061602d1a6c6690')] blur-[3px]"></div>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="flex flex-row w-[1300px] h-[800px] flex-wrap items-center justify-center">
          <div className="lg:w-1/2 flex items-center justify-center md:w-full">
            <Image src={logo} width="400" height="400" alt="HomeCinema"></Image>
          </div>
          <form className="lg:w-1/2 flex flex-col items-center justify-center gap-4 md:w-full">
            <h1>{t('login')}</h1>
            
            <Input key="outside" type="email" label={t('email')} labelPlacement="outside" isInvalid={false} description="" radius="sm" variant="faded" className="h-[40px] w-[450px]"/>

            <Input label={t('password')} description="" labelPlacement="outside"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
            }
            type={isVisible ? "text" : "password"}
            className="h-[40px] w-[450px]"
            radius="sm"
            variant="faded"
            />
            <div className="w-[450px]">
              <Checkbox size="sm" isSelected={isSelected} onValueChange={setIsSelected}>
                {t('remember')}
              </Checkbox>
            </div>

            <Link className="flex items-center justify-center h-[40px] w-[450px] bg-orange-400 rounded outline-none focus:ring text-white hover:ring" href='/dashboard'>{t('login')}</Link>

          </form>
        </div>

      </div>
    </div>
  )
}