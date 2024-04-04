// src/services/api.js

const BASE_URL = 'https://openlibrary.org/search.json';

// Fetcher bøker for en spesifikk  query
export const fetchBooksByQuery = async (query) => {
  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&fields=title,author_name,first_publish_year,cover_i`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log(data);
  return data.docs; // Returnerer en array av bok-objekter basert på søket
};

// Kan eksportere spesifikk funksjon for å hente James Bond bøker
export const fetchJamesBondBooks = async () => {
  return fetchBooksByQuery('James Bond');
};