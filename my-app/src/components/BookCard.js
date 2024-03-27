// src/components/BookCard.js //

import React from 'react';
import styles from '../Styles/BookCard.module.css';

const BookCard = ({ book }) => {
   // her kommer JSX inn, som viser boksens informasjon
  return (
    <div className={styles.bookCard}>
      <h3>{book.title}</h3>
      <p>Forfatter: {book.author_name ? book.author_name.join(', ') : 'Ukjent'}</p>
      {book.cover_i && (
        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={`Omslag av ${book.title}`} />
      )}
    </div>
  );
};

export default BookCard;

