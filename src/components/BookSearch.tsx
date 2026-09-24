import "../styles/BookSearch.css";
import BookResults from "./BookResults";
import SearchBar from "./SearchBar";
import SearchHistory from "./SearchHistory";

function BookSearch() {
  return (
    <main className="book-search">
      <header className="book-search__header">
        <p className="book-search__kicker">Open Library</p>
        <h1 className="book-search__title">Buscador de libros</h1>
        <p className="book-search__lead">
          Escribe un título, revisa los resultados en tarjetas y conserva cada búsqueda como un chip.
        </p>
      </header>
      <SearchBar />
      <SearchHistory />
      <BookResults />
    </main>
  );
}

export default BookSearch;
