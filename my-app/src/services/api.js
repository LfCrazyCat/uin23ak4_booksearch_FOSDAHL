//  src/services/Api.js  // 


const BASE_URL = 'https://openlibrary.org';

export const fetchBooksByQuery = async (query) => {
  const response = await fetch(`${BASE_URL}/search.json?q=${encodeURIComponent(query)}&fields=title,author_name,first_publish_year`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.docs;
};

export const fetchJamesNondBooks = () => fetchBooksByQuerry('James Bond');


  


/*
export function fetchJamesBondBooks() {
  return fetch('https://openlibrary.org/search.json?q=James+Bond&fields=title,author_name,publish_date,cover_i')
  .then(response => response.json())
  .then(data => data.docs);
} */