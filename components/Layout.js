import React from 'react';
import Head from 'next/head';

//components
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Onigiri</title>
        <meta name='description' content='e-commerce' />
      </Head>
      <Header />
      <main className='container m-auto'>{children}</main>
    </>
  );
}
