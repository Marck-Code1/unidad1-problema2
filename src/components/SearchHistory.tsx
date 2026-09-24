import "../styles/SearchHistory.css";

function SearchHistory() {
  return (
    <section className="search-history" aria-label="Búsquedas realizadas">
      <h2 className="search-history__title">Búsquedas recientes</h2>
      <ul className="search-history__list">
        <li>
          <button className="search-chip search-chip--active" type="button">
            harry potter
          </button>
        </li>
        <li>
          <button className="search-chip" type="button">
            dune
          </button>
        </li>
        <li>
          <button className="search-chip" type="button">
            1984
          </button>
        </li>
        <li>
          <button className="search-chip" type="button">
            el principito
          </button>
        </li>
        <li>
          <button className="search-chip" type="button">
            frankenstein
          </button>
        </li>
      </ul>
    </section>
  );
}

export default SearchHistory;
