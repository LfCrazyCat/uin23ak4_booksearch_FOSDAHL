// pages/index.js
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import SearchResults from '../components/SearchResults'; 

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query); 

    

    if (query.length >= 3) {
      setIsSearchActive(true);
      // Utfør API-kall for å hente bøker basert på tittelen
      const results = await searchBooksByTitle(query);
      setBooks(results);
    } else {
      setIsSearchActive(false);
      // Hvis under tre tegn, vis de originale James Bond-bøkene
      const jamesBondBooks = await fetchJamesBondBooks();
      setBooks(jamesBondBooks);
    }
  };

  return (
    <div>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
      {isSearchActive ? (
        <SearchResults books={books} />
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};

export default Home;



