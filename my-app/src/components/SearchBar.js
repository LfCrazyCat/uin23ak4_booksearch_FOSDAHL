// I SearchBar-komponenten
import React from 'react';


const SearchBar = ({ value, onChange }) => {
  const handleChange = (event) => {
    console.log('Search query:', event.target.value);
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Søk..."
    />
  );
};

export default SearchBar;