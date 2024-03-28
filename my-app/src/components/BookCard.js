// src/components/BookCard.js //

import React from 'react';
import Image from 'next/image';
import bookCardStyles from '../styles/BookCard.module.css';

const BookCard = ({ book }) => {

  const width = 200;
  const height = 300; 
   // her kommer JSX inn, som viser boksens informasjon

  return (
    <div className={bookCardStyles.bookCard}>
      <h3>{book.title}</h3>
      <p>Forfatter: {book.author_name ? book.author_name.join(', ') : 'Ukjent'}</p>
      {book.cover_i && (
                <Image 
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`Omslag av ${book.title}`}
                width={width}
                height={height}
                layout="responsive"
              />
      )}
    </div>
  );
};

export default BookCard;

