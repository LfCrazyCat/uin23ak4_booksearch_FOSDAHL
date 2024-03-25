// pages/index.js
import React, { useState, useEffect } from 'react';
import { fetchJamesBondBooks } from '@/services/api';
import BookCard from '../components/BookCard';
// under her mp import styles from ... står //

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchJamesBondBooks().then(setBooks);
  }, []);
  
   return (
    <div className={StyleSheet.container}>
      {/*  Annet innhold og evt søkefelt */ }
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
   );
}