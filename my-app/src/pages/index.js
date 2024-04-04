import React, { useState, useEffect } from 'react';
import { fetchBooksByQuery, fetchJamesBondBooks } from '../services/api'; // Enkel import her
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Hent James Bond-bøker når komponenten monteres
  useEffect(() => {
    const loadJamesBondBooks = async () => {
      const jamesBondBooks = await fetchJamesBondBooks();
      setBooks(jamesBondBooks);
    };

    loadJamesBondBooks();
  }, []);

  const handleSearchChange = async (query) => {
    try {
      console.log('Search query:', query);
      setSearchQuery(query);
  
      if (query.length >= 3) {
        setIsSearchActive(true);
        const results = await fetchBooksByQuery(query);
        console.log('Search results:', results);
        setBooks(results);
      } else {
        setIsSearchActive(false);
        const jamesBondBooks = await fetchJamesBondBooks();
        setBooks(jamesBondBooks);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      // Håndter feilen her, f.eks. ved å sette en feilmelding i tilstanden og vise den til brukeren- men det hjelper ikke
    }
  };
  return (
    <div>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
      {isSearchActive ? (
        <BookList books={books} />
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};



export default Home;