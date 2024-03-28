// src/components/SearchResults.js
import React from 'react';
import BookCard from '../components/BookCard';

const SearchResults = ({ books }) => {
  return (
    <div>
      {books.map(book => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default SearchResults;