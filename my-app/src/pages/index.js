// pages/index.js
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import SearchResults from '../components/SearchResults'; 

import bookCardStyles from '../styles/BookCard.module.css';
import containerStyles from '../styles/Container.module.css';
import BookCard from '../components/BookCard';
import { fetchJamesBondBooks } from '../services/api';

export async function getStaticProps() {
  const books = await fetchJamesBondBooks();
  return {
    props: {
      books,
    },
  };
}

// En enkelt Home-komponent blir ekspotert
export default function Home ({ books }) {
  return (
    <div className={containerStyles.container}>
      {books.map((book, index) => (
        <BookCard key={index} book={book} className={bookCardStyles.bookCard} />
        
      ))}
    </div>
  );
}

