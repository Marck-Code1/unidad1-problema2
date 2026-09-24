import {useState,useEffect} from 'react'
import {getBooksAsync} from '../services/bookService'
import {type BookReference} from '../types/BookTypes'

export const useBooks = (title:string) => {

  const [books, setBooks] = useState<BookReference[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      setHasError(false);
      try {
        const booksResponse = await getBooksAsync(title);
        setBooks(booksResponse);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    };
    void getBooks();
  }, [title]);
  // dejar [] vacio hace que se ejecute el efecto cada vez que se rendecire el componente en la pagina
  return {
    books,
    hasError,
  };




  return (
    <>
    <div>useBooks</div>

    </>
  )
}
