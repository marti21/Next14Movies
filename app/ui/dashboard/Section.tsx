'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { montserrat } from '../fonts';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useTranslation } from 'react-i18next';

export const Section = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(true);

  const containerVariants = {
    open: { width: 250 },
    closed: { width: 80 },
  };

  const containerTransition = {
    duration: 0.2,
    ease: 'easeInOut',
  };

  function changeWidth() {
    setOpen(!open);
  }

  return (
    <motion.section
      className={`py-4 h-[calc(100vh-100px)] bg-[#fc7f03] flex flex-col gap-16 ${montserrat.className}`}
      variants={containerVariants}
      initial={open ? 'open' : 'closed'}
      animate={open ? 'open' : 'closed'}
      transition={containerTransition}
    >
      
        <div className='pl-2'>
          <button className='flex border-solid rounded-full border-black border w-fit flex justify-content items-center bg-orange-300' onClick={() => changeWidth()}>
            {
              open ?  <ArrowBackIcon /> :  <ArrowForwardIcon />
            }
            </button>
        </div>
      
      { 
      open ? (
        <div className='pl-2 flex flex-col gap-4 justify-start items-start'>
            <Link href='/dashboard' className='text-white w-full bg-red-500 h-[40px] flex justify-center items-center hover:bg-black border-solid rounded-l-lg'>          
              {t('dashboard')}
            </Link>
            <Link href='/dashboard/latest' className='text-white w-full bg-red-500 h-[40px] flex justify-center items-center hover:bg-black border-solid rounded-l-lg'>          
              {t('latest')}
            </Link>
            <Link href='/dashboard/incoming' className='text-white w-full bg-red-500 h-[40px] flex justify-center items-center hover:bg-black border-solid rounded-l-lg'>          
              Incoming
            </Link>
            <Link href='/best' className='text-white w-full bg-red-500 h-[40px] flex justify-center items-center hover:bg-black border-solid rounded-l-lg'>          
              Best Rated
            </Link>
        </div>
        ):
        <div className='py-4 flex flex-col gap-4 items-center'>
          <Link href='/dashboard' className='border-solid border-black rounded-md p-2 border-2 w-fit'><HomeOutlinedIcon /></Link>
            <div className='border-b w-full border-grey-500' />
          <Link href='/dashboard/latest' className='border-solid border-black rounded-md p-2 border-2 w-fit'><HomeIcon /></Link>
            <div className='border-b w-full border-grey-500' />
          <Link href='/dashboard/incoming' className='border-solid border-black rounded-md p-2 border-2 w-fit'><HomeIcon /></Link>
            <div className='border-b w-full border-grey-500' />
          <Link href='/best' className='border-solid border-black rounded-md p-2 border-2 w-fit'><HomeIcon /></Link>
            <div className='border-b w-full border-grey-500'/>

        </div>
      }
      
    </motion.section>
  );
};