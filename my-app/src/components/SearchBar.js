// I SearchBar-komponenten
import React from 'react';
import styles from '../app/SearchBar.module.css';


const SearchBar = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Søk etter film eller bok..."
      className={styles.searchInput}
    />
  );
};

export default SearchBar;