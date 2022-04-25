import React, { useContext } from 'react';
import Head from 'next/head';

//components
import Navbar from './Navbar';
import Footer from './Footer';
import { Store } from '../utils.js/Store';

export default function Layout({ title, children, description }) {
  const { state, dispatch } = useContext(Store);

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
