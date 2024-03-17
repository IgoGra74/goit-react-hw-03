const SearchBox = ({ search, setSearch }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;