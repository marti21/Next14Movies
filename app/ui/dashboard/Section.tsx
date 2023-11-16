'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Section = () => {
  const [open, setOpen] = useState(true);

  const containerVariants = {
    open: { width: 200 },
    closed: { width: 80 },
  };

  const containerTransition = {
    duration: 0.5,
    ease: 'easeInOut',
  };

  function changeWidth() {
    setOpen(!open);
  }

  return (
    <motion.section
      className={`pl-4 py-16 h-[calc(100vh-100px)] bg-yellow-200 flex flex-col gap-16`}
      variants={containerVariants}
      initial={open ? 'open' : 'closed'}
      animate={open ? 'open' : 'closed'}
      transition={containerTransition}
    >
      <div className=''>
        <button className='flex border-solid rounded-full border-black border w-fit flex justify-content items-center bg-yellow-200' onClick={() => changeWidth()}><ArrowForwardIcon /></button>
      </div>

      { 
      open ? (
        <div className='flex flex-col gap-4 justify-start items-start'>
          <Link href='/dashboard'>Dashboard</Link>
          <Link href='/dashboard/latest'>Latest</Link>
          <Link href='/dashboard/incoming'>Incoming</Link>
          <Link href='/best'>Best Rated</Link>
        </div>
        ):
        <div className='flex flex-col gap-4 justify-start items-start'>
          <Link href='/dashboard' className='border-solid border-black rounded-md p-2 border-2 w-fit'><HomeIcon /></Link>
          <Link href='/dashboard/latest' className='border-solid border-black rounded-md p-2 border-2 w-fit'><HomeIcon /></Link>
          <Link href='/dashboard/incoming' className='border-solid border-black rounded-md p-2 border-2 w-fit'><HomeIcon /></Link>
          <Link href='/best' className='border-solid border-black rounded-md p-2 border-2 w-fit'><HomeIcon /></Link>
        </div>
      }
      
    </motion.section>
  );
};