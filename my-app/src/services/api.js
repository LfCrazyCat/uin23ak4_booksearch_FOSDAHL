// src/services/api.js

const BASE_URL = 'https://openlibrary.org';

export const searchBooksByTitle = async (title) => {
  const response = await fetch(`${BASE_URL}/search.json?title=${encodeURIComponent(title)}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.docs.map((doc) => ({
    title: doc.title,
    publishYear: doc.publish_date ? doc.publish_date[0] : 'Unknown', // Første år boken ble publisert
    authorName: doc.author_name ? doc.author_name.join(', ') : 'Unknown',
    averageRating: doc.average_rating || 'Not available', // Bør undersøkes om gjennomsnittlig rating, ikke alltid direkte tilgjengelig fra OpenLibrarys API
    amazonId: doc.amazon_id // Ikke alltid tilgjengelig og er ikke dokumentert i OpenLibrarys API, men hvis responsen, kan den bruke det sånn
  }));
};