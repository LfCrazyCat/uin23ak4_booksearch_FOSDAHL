import React from 'react';
import Image from 'next/image';

const BookCard = ({ book }) => {

  const amazonSearchUrl = book.amazon_id ? `https://www.amazon.com/s?k=${book.amazon_id}` : null;

  return (
    <div style={{ 
      maxWidth: '150px',
      margin: '10px',
      border: '1px solid #ddd',
      padding: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'  }}>
       <h3>{book.title}</h3>
      <p>Forfatter: {book.author_name ? book.author_name.join(', ') : 'Ukjent'}</p>
      <p>Publisert: {book.first_publish_year}</p>
      <p>Rating: {book.averageRating ? book.averageRating : 'Ikke tilgjengelig'}</p> {/* Hvis det foreligger rating-data */}

      {book.cover_i && (
        <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                <Image 
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`Omslag av boken ${book.title}`}
                layout="fill"
                objectFit="cover"
              />
              </div>
        
      )}
            {book.amazon_id && (
        <button onClick={() => window.open(`https://www.amazon.com/s?k=${book.amazon_id}`, '_blank')}>
          Søk på Amazon
        </button>
      )}
    </div>
  );
};

export default BookCard;
