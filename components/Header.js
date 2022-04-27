import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='min-h-[630px] relative pt-24 px-0 pb-20 mb-6 lg:text-left md:text-left text-center'>
      <video
        loop
        autoPlay
        className='absolute object-cover top-0 left-0 m-0 p-0 w-full h-full'
      >
        <source src='/videos/header.mp4' type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-[#0000007a] bg-no-repeat'></div>
      <div className='relative max-w-[1264px] lg:m-20'>
        <div className='flex text-white flex-col lg:w-2/5 md:w-3/4 m-3'>
          <h1 className='text-5xl tracking-wide  leading-tight'>
            Kosmetyki idealne na wiosenne promienie słońca
          </h1>
          <h3 className='text-xl pt-5 tracking-wide leading-snug md:w-3/4 '>
            Sprawdź nowości stworzone dla pielęgnacji skóry by powitać wiosenną
            pogodę bez żadnych zmartwień!
          </h3>
          <Link href='/allProducts' passHref>
            <a className='mx-auto md:mx-0 lg:mx-0  mt-14 p-2 tracking-wider uppercase border rounded w-auto md:w-48 text-center bg-[#ffffff23]'>
              Nowości
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
