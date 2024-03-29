// src/pages/_app.js 
import "../app/globals.css";
import Layout from '../app/layout';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
