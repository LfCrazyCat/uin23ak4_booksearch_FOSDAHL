import React from 'react';
import Image from 'next/image';

const BookCard = ({ book }) => {
  // Sørg for at URL-en konstrueres riktig med template literals
  const amazonSearchUrl = book.amazon_id
    ? `https://www.amazon.com/s?k=${book.amazon_id}`
    : null;

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <h2>{book.title}</h2>
      <p>Forfatter: {book.author_name ? book.author_name.join(', ') : 'Ukjent'}</p>
      <p>Publisert: {book.first_publish_year}</p>
      <p>Rating: {book.average_rating ? `${book.average_rating} / 5` : 'Ikke tilgjengelig'}</p> {/* Antar at rating er skalaen 0 til 5 */}
      {book.cover_i && (
        <Image
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={`Omslag av boken ${book.title}`}
          width={200}
          height={300}
          unoptimized={true}
        />
      )}
      {amazonSearchUrl && (
        <button onClick={() => window.open(amazonSearchUrl, '_blank')}>
          Kjøp på Amazon
        </button>
      )}
    </div>
  );
};

export default BookCard;
      
