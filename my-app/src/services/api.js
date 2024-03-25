//src/services/Api.js  // 

export function fetchJamesBondBooks() {
  return fetch('https://openlibrary.org/search.json?q=James+Bond&fields=title,author_name,publish_date,cover_i')
  .then(response => response.json())
  .then(data => data.docs);
}