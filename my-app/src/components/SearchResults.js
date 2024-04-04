// src/components/SearchResults.js
import React from 'react';
import BookCard from '../components/BookCard';

const SearchResults = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default SearchResults;