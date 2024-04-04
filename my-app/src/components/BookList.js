// src/components/BookList.js
import React, { useEffect, useState } from 'react';
import { fetchJamesBondBooks } from '../services/api';
import BookCard from '../components/BookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const booksFromApi = await fetchJamesBondBooks();
      setBooks(booksFromApi);
    };

    loadBooks();
  }, []);

  return (
    <div>
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;