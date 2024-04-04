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
    console.log('Search query:', query);
    setSearchQuery(query);

    if (query.length >= 3) {
      setIsSearchActive(true);
      // Utfør API-kall for å hente bøker basert på søkefrasen
      const results = await fetchBooksByQuery(query);
      setBooks(results);
    } else {
      setIsSearchActive(false);
      // Reset bøkene til James Bond-bøkene hvis søkefeltet er tomt eller mindre enn tre tegn
      const jamesBondBooks = await fetchJamesBondBooks();
      setBooks(jamesBondBooks);
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