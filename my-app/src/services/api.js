// src/services/api.js

const BASE_URL = 'https://openlibrary.org';

// Definer funksjonen som skal hente bøker basert på en søkefrase
export const fetchBooksByQuery = async (query) => {
  const url = `${BASE_URL}/search.json?q=${encodeURIComponent(query)}&fields=title,author_name,publish_date,cover_i,amazon_id`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.docs;
};

// Hjelpefunksjon for å hente James Bond-bøker
export const fetchJamesBondBooks = async () => {
  return fetchBooksByQuery('James Bond');
};