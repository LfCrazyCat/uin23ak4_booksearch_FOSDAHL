This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Endrer på dette for å se om jeg får metadata via Swagger-doc 
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


Prøver å endrer i BookCard.js filen også, her er første koden som byttes ut: 
const BookCard = ({ book }) => {
  // Sørg for at URL-en konstrueres riktig med template literals
  const amazonSearchUrl = book.amazon_id
    ? `https://www.amazon.com/s?k=${book.amazon_id}`
    : null;

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <h2>{book.title}</h2>
      <p>Forfatter: {book.author_name ? book.author_name.join(', ') : 'Ukjent'}</p>
      <p>Publisert: {book.first_publish_year}</p>
      <p>Rating: {book.average_rating ? `${book.average_rating} / 5` : 'Ikke tilgjengelig'}</p> {/* Antar at rating er skalaen 0 til 5 */}
      {book.cover_i && (
        <Image
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={`Omslag av boken ${book.title}`}
          width={200}
          height={300}
          unoptimized={true}
        />
      )}
      {amazonSearchUrl && (
        <button onClick={() => window.open(amazonSearchUrl, '_blank')}>
          Kjøp på Amazon
        </button>
      )}
    </div>
  );
};

export default BookCard;
      

Må endre i api.js igjen, fjerner: 
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