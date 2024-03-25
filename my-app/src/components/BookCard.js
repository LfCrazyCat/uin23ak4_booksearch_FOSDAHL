// src/components/BookCard.js //

function BookCard({ book }) {
  return (
    <li>
      <h3>{book.title}</h3>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}'</p>
      {book.cover_i && (
        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={`Cover of ${book.title}`} />
      )}
    </li>
  );
}

export default BookCard;