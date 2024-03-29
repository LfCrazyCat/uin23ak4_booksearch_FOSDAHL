// I SearchBar-komponenten
const SearchBar = ({ value, onChange }) => {
  const handleChange = (event) => {
    // Sender kun verdien videre, ikke hele event-objektet
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