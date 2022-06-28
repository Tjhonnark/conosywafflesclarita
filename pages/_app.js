import React, { useEffect } from 'react';
import Head from "next/head";
import Layout from '../components/Layout';
/* STYLES */
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, [])

  return (
    <div>
      <Head>
        <title>Conos y Waffles Clarita</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ConosYWafflesClarita.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </div>
  );
}

export default MyApp
