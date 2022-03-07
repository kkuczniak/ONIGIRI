import React from 'react';
import Head from 'next/head';

//components
import Header from './Header';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - ONIGIRI` : 'ONIGIRI'}</title>
        <meta name='description' content='e-commerce' />
      </Head>
      <Header />
      <main className=''>{children}</main>
    </>
  );
}
