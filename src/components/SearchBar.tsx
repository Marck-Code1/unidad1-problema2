import "../styles/SearchBar.css";

function SearchBar() {
  return (
    <form className="search-bar" action="#" onSubmit={(event) => event.preventDefault()}>
      <label className="search-bar__label" htmlFor="book-query">
        Buscar libros
      </label>
      <div className="search-bar__row">
        <input
          id="book-query"
          className="search-bar__input"
          type="search"
          name="q"
          defaultValue="harry potter"
          readOnly
        />
        <button className="search-bar__button" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
