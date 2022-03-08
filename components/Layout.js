import React, { useContext } from 'react';
import Head from 'next/head';

//components
import Header from './Header';
import { Store } from '../utils.js/Store';

export default function Layout({ title, children, description }) {
  const { state, dispatch } = useContext(Store);

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
