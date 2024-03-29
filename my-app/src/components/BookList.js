// src/components/BookList.js
import React from 'react';
import BookCard from '../components/BookCard';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => (
        // Kompoent for en enkel bok, inkl tittel, pub.år mm
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;