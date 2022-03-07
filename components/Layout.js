import React from 'react';
import Head from 'next/head';

//components
import Header from './Header';

export default function Layout({ title, children, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - ONIGIRI` : 'ONIGIRI'}</title>
        {description && <meta name='description' content={description} />}
      </Head>
      <Header />
      <main className='font-serif font-medium '>{children}</main>
    </>
  );
}
