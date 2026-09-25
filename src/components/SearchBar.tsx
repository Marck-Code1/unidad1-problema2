import "../styles/SearchBar.css";

interface SearchBarProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

function SearchBar({ title, setTitle, onSearch }: SearchBarProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch();
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label className="search-bar__label" htmlFor="book-query">
        Buscar libros
      </label>

      <div className="search-bar__row">
        <input
          id="book-query"
          className="search-bar__input"
          type="search"
          name="q"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className="search-bar__button" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
