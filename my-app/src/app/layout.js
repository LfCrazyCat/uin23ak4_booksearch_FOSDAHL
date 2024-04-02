// src/app/layout.js 
import React from 'react';

export default function Layout({ children }) {
  return (
    <React.Fragment>
    <main>
      {children}
    </main>
    <footer>
      {/* Footer */}
    </footer>
  </React.Fragment>
);
}
 