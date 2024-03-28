// src/components/BookList.js
import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => (
        // Kompoent for en enkel bok, inkl tittel, pub.år mm
      ))}
    </div>
  );
};

export default BookList;