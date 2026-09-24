import "../styles/SearchBar.css";

import { useBooks } from "../hooks/useBooks";
function SearchBar() {

  const btitle:string = ""
  useBooks(btitle)
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
          value={btitle}

        />
        <button className="search-bar__button" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
