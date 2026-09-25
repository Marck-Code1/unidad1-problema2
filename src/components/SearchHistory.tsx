import "../styles/SearchHistory.css";
import { HistoryButton } from "./HistoryButton";


function SearchHistory({ query, onSelect}: { query: string[]; onSelect: (q: string) => void;}) {

  return (
    <section className="search-history" aria-label="Búsquedas realizadas">
      <h2 className="search-history__title">Búsquedas recientes</h2>
      <ul className="search-history__list">
        <>
            {query.map((q: string) => (
    <li key={q}>
      <HistoryButton title={q} onSelect={() => onSelect(q)}/>
    </li>
          ))
          }
        </>
      </ul>
    </section>
  );
}
export default SearchHistory;
