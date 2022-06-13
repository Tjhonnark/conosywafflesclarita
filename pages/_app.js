import React, {useEffect} from 'react';
import Head from "next/head";
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap');
  },[])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
