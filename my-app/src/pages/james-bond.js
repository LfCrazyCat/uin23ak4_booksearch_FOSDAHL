// for å vise til James Bond filmer eller bøker, men ikke nødvendig

import React from 'react';
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

const JamesBondBooks = ({ books }) => {
  return  (
    <div className={containerStyles.container}>
      {books.map((book, index) => (
        <bookCard key={index} book={book} className={bookCardStyle.bookCard} />
        ))}
      <h1>James Bond Books</h1>
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default JamesBondBooks; 