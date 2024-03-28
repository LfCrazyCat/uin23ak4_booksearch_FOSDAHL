// src/components/SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length>= 3) {
      onSearch(value);
    }
  };

  return (
    <input
    type="text"
    placeholder="Søk her..."
    value={input}
    onChange={handleInputChange}
    />
  );
};

export default SearchBar;