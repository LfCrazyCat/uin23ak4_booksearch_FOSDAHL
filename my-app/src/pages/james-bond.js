import React from 'react';
import BookCard from '../components/BookCard';
import { fetchJamesBondBooks } from '../services/api';
import Style from '../Styles/BookCard.module.css';
import Style from '../Styles/Container.module.css';

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
    <div>
      <h1>James Bond Books</h1>
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default JamesBondBooks; 