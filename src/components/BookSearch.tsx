import "../styles/BookSearch.css";
import BookResults from "./BookResults";
import SearchBar from "./SearchBar";
import SearchHistory from "./SearchHistory";
import { useBooks } from "../hooks/useBooks";
import { type Doc } from "../types/BookTypes";
import { useState } from "react";

function BookSearch() {
  const [title, setTitle] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [history,setHistory] = useState<string[]>([])
  const { books, hasError } = useBooks(searchTitle);

  const sbooks: Doc[] = books;

  function handleSearch() {
    const q = title.trim();
    if (!q) return;
    setSearchTitle(title);
    setHistory(prev=> prev.includes(q) ? prev: [q,...prev])
  }

  function handleSelect(q: string) {
  setTitle(q);
  setSearchTitle(q);
}



  return (
    <main className="book-search">
      <header className="book-search__header">
        <p className="book-search__kicker">Open Library</p>

        <h1 className="book-search__title">Buscador de libros</h1>

        <p className="book-search__lead">
          Escribe un título, revisa los resultados en tarjetas y conserva cada
          búsqueda como un chip.
        </p>
      </header>

      <SearchBar title={title} setTitle={setTitle} onSearch={handleSearch} />

      <SearchHistory query={history} onSelect={handleSelect} />

      {hasError && <p>Error al buscar los libros.</p>}

      <BookResults booksdata={sbooks} />
    </main>
  );
}

export default BookSearch;
