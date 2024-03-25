//  src/services/Api.js  // 


const BASE_URL = 'http://openlibrary.org';

export const fetchJamesBondBooks = async () => {
  
  
}

export function fetchJamesBondBooks() {
  return fetch('https://openlibrary.org/search.json?q=James+Bond&fields=title,author_name,publish_date,cover_i')
  .then(response => response.json())
  .then(data => data.docs);
}