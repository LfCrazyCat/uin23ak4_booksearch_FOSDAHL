// pages/index.js
import React from 'react';
import bookCardStyles from '../Styles/BookCard.module.css';
import containerStyles from '../Styles/Container.module.css';
import BookCard from '../components/BookCard';

export default function Home({ books }) {
  return (
    <div className={containerStyles.container}>
      {books.map((book, index) => (
        <bookCard key={index} book={book} className={bookCardStyles}
       )}
    </div>
  )
}

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchJamesBondBooks().then(setBooks);
  }, []);
  
   return (
    <div className={Styles.container}>
      /*  Annet innhold og evt søkefelt */ 
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
   );
      }
