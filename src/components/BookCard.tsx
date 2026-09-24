import {type Doc} from '../types/BookTypes'
import "../styles/BookResults.css";
interface BookProps{
    book:Doc
}

export  const BookCard = ({book}:BookProps) => {
  return (
    <>
        <li>
          <article className="book-card">
            <img
              className="book-card__cover"
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={`Portada de ${book.title}`}
            />
            <div className="book-card__body">
              <h3 className="book-card__title">{book.title}</h3>
              <p className="book-card__author">{book.author_name}</p>
              <p className="book-card__meta">{book.first_publish_year} · {book.edition_count} ediciones </p>
            </div>
          </article>
        </li>
    </>
  )
}

/*


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

*/