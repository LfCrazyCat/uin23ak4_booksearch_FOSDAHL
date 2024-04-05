// src/app/layout.js 
import React from 'react';
import styles from './Layout.module.css';


export default function Layout({ children }) {
  return (
    <>
    <header className={styles.header}>
      <h1>Boksøk</h1>
      {/* Eventuelle navigasjonslinker for semantisk innhold */}
    </header>
    <main className={styles.main}>
      {children}
    </main>
    <aside className={styles.aside}>
      {/* Eventuelle sideinnhold, for semantikk */ }
    </aside>
    <footer className={styles.footer}>
      Arbeidskrav 4
    </footer>
    </>
  );
  }


