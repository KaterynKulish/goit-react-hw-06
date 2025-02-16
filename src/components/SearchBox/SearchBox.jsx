import s from './SearchBox.module.css';

const SearchBox = ({ handleSearch, filtered }) => {
  return (
    <div className={s.search}>
      <label htmlFor="search">Find contacts by name:</label>
      <input
        type="text"
        id="search"
        name="search"
        value={filtered}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
