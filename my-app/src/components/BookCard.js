import React from 'react';
import Image from 'next/image';

const BookCard = ({ book }) => {

  const amazonSearchUrl = book.amazon_id ? `https://www.amazon.com/s?k=${book.amazon_id}` : null;
  
  return (
    <div>
       <h3>{book.title}</h3>
      <p>Forfatter: {book.author_name ? book.author_name.join(', ') : 'Ukjent'}</p>
      <p>Publisert: {book.first_publish_year}</p>
      <p>Rating: {book.averageRating ? book.averageRating : 'Ikke tilgjengelig'}</p> {/* Hvis du har rating-data */}

      {book.cover_i && (
                <Image 
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`Omslag av boken ${book.title}`}
                width={50}
                height={100}
                layout="responsive"
              />
        
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
