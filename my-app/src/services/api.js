const BASE_URL = 'https://openlibrary.org';

export const fetchBooksByQuery = async (query) => {
  const response = await fetch(`${BASE_URL}/search.json?q=${encodeURIComponent(query)}&fields=title,author_name,publish_date,cover_i`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.docs;
};

export const fetchJamesBondBooks = () => fetchBooksByQuery('James Bond');