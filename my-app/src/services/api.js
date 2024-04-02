// src/services/api.js

const BASE_URL = 'https://openlibrary.org';

// Søk etter bøker basert på en søkefrase
export const fetchBooksByQuery = async (query) => {
  // Riktig bruk av backticks og fjern ekstra linje med 'const url'
  const url = `${BASE_URL}/search.json?q=${encodeURIComponent(query)}&fields=title,author_name,publish_date,cover_i,amazon_id`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.docs;
};

// Hente James Bond-bøker ved å bruke hjelpefunksjonen
export const fetchJamesBondBooks = async () => {
  return fetchBooksByQuery('James Bond');
};