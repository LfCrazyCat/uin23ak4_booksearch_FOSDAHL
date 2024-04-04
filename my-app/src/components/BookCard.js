import React from 'react';
import Image from 'next/image';

const BookCard = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>Forfatter: {book.authorName}</p>
      <p>Publisert: {book.publishYear}</p>
      <p>Rating: {book.averageRating}</p>
      {book.amazonId && (
        <button onClick={() => window.open(`https://www.amazon.com/s?k=${book.amazonId}`, '_blank')}>
          Søk på Amazon
        </button>
      )}
    </div>
  );
};

export default BookCard;
