//  src/App.js  //

import React, { useState, useEffect } from 'react';
import { fetchJamesBondBooks } from './services/api';
import BookCard from './components/BookCard';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchJamesBondBooks().then(setBooks);
  }, []);

  return (
    <div>
      <ul>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </ul>
    </div>
  );
  }