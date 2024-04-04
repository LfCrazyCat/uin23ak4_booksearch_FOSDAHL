// src/services/api.js

const BASE_URL = 'https://openlibrary.org';

// Fetcher bøker for en spesifikk  query
export const fetchBooksByQuery = async (query) => {
  const url = `${BASE_URL}/search.json?q=${encodeURIComponent(query)}&fields=title,author_name,publish_date,cover_i`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.docs;
};

// Fetcher James Bond bok av spesifikk bruk av fetchBooksByQuery 
export const fetchJamesBondBooks = async () => {
  return fetchBooksByQuery('James Bond');
};