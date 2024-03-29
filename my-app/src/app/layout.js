// src/app/layout.js 
import { Inter } from "next/font/google";
import { metadata } from '../utils/metadata';

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <main>
          {/* Dette er hovedinnholdet og vil være ulikt for hver side */}
          {children}
        </main>

        <footer style={{ marginTop: '20px', padding: '20px', textAlign: 'center' }}>
          {/* Footer-innhold */}
          <p>{metadata.description}</p>
        </footer>
      </body>
    </html>
  );
}