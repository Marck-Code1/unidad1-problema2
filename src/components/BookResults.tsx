import "../styles/BookResults.css";

function BookResults() {
  return (
    <section className="book-results" aria-label="Resultados de libros">
      <div className="book-results__header">
        <h2 className="book-results__title">Resultados</h2>
        <p className="book-results__count">4 libros para “harry potter”</p>
      </div>
      <ul className="book-results__grid">
        <li>
          <article className="book-card">
            <img
              className="book-card__cover"
              src="https://covers.openlibrary.org/b/id/15155833-M.jpg"
              alt="Portada de Harry Potter and the Philosopher's Stone"
            />
            <div className="book-card__body">
              <h3 className="book-card__title">Harry Potter and the Philosopher's Stone</h3>
              <p className="book-card__author">J. K. Rowling</p>
              <p className="book-card__meta">1997 · 400 ediciones</p>
            </div>
          </article>
        </li>
        <li>
          <article className="book-card">
            <img
              className="book-card__cover"
              src="https://covers.openlibrary.org/b/id/15158664-M.jpg"
              alt="Portada de Harry Potter and the Chamber of Secrets"
            />
            <div className="book-card__body">
              <h3 className="book-card__title">Harry Potter and the Chamber of Secrets</h3>
              <p className="book-card__author">J. K. Rowling</p>
              <p className="book-card__meta">1998 · 306 ediciones</p>
            </div>
          </article>
        </li>
        <li>
          <article className="book-card">
            <img
              className="book-card__cover"
              src="https://covers.openlibrary.org/b/id/10580435-M.jpg"
              alt="Portada de Harry Potter and the Prisoner of Azkaban"
            />
            <div className="book-card__body">
              <h3 className="book-card__title">Harry Potter and the Prisoner of Azkaban</h3>
              <p className="book-card__author">J. K. Rowling</p>
              <p className="book-card__meta">1999 · 279 ediciones</p>
            </div>
          </article>
        </li>
        <li>
          <article className="book-card">
            <img
              className="book-card__cover"
              src="https://covers.openlibrary.org/b/id/15158660-M.jpg"
              alt="Portada de Harry Potter and the Deathly Hallows"
            />
            <div className="book-card__body">
              <h3 className="book-card__title">Harry Potter and the Deathly Hallows</h3>
              <p className="book-card__author">J. K. Rowling</p>
              <p className="book-card__meta">2007 · 144 ediciones</p>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
}

export default BookResults;
