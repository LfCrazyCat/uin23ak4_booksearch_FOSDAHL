// src/pages/_app.js 
import Layout from '../app/layout';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import BookList 
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
