import React from 'react';
import BookCard from '../components/BookCard';
import { fetchJamesBondBooks } from '../services/api';
import bookCardStyle from '../Styles/BookCard.module.css';
import containerStyle from '../Styles/Container.module.css';

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
    <div className={containerStyles.conmtainer}>
      {books.map((book, index) => (
        <bookCard key={index} book={book} className={bookCardStyles.bookCard} />
        ))}
      <h1>James Bond Books</h1>
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default JamesBondBooks; 