// src/app/layout.js 
import { Inter } from "next/font/google";
import { metadata } from './metadata';


const inter = Inter({ subsets: ["latin"] });

// funksjon for håndterer søkemulighet
function handleSearch(e) {
  console.log(e.target.value); //søkelogikken
}

export const metadata = {
  title: "Book Search",
  description: "Boksøk for arbeidskrav 4 i UIN",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        {/* Søkefelth her */}
        <div style={{ padding: '20px' }}>
        <input 
        type="text"
        placeholder="Minst tre tegn.."
        onChange={handleSearch}
        />
        </div>

        <main>
          {/* For hovedinnhold, vil være ulik for hver side */}
          {children}
        </main>

        <footer>
          {/* Footer */}
          <p>{metadata.description}</p>
        </footer>
      </body>
    </html>
    );
  }
  
