import {useState,useEffect} from 'react'
import {getBooksAsync} from '../services/bookService'
import {type Doc} from '../types/BookTypes'

export function useBooks(title:string) {

  
  const [books, setBooks] = useState<Doc[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
  if (!title.trim()) {
    return;
  }

  const getBooks = async () => {
    setHasError(false);

    try {
      const data = await getBooksAsync(title);
      setBooks(data.docs);
    } catch (error) {
      console.error(error);
      setHasError(true);
    }
  };
    void getBooks();
  }, [title]);
 
  return {
    books,
    hasError,
  };


}
