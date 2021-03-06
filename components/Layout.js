import React from 'react';
import Head from 'next/head';

//components
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ title, children, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - ONIGIRI` : 'ONIGIRI'}</title>
        {description && <meta name='description' content={description} />}
        <link rel='shortcut icon' href='/leafIcon.png' />
      </Head>
      <Navbar />
      <main className='font-serif font-medium min-h-screen pb-28 bg-white'>
        {children}
      </main>
      <Footer />
    </>
  );
}
