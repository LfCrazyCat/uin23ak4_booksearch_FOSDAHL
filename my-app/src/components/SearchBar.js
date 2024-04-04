// I SearchBar-komponenten
const SearchBar = ({ value, onChange }) => {
  const handleChange = (event) => {
    console.log(event.target.value);
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