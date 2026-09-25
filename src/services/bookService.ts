import {type BookReference} from '../types/BookTypes'

export const getBooksAsync = async (bTitle:string): Promise<BookReference> => {
  
  bTitle.trim()
  const response = await fetch(`https://openlibrary.org/search.json?q=${bTitle}`);

  if (!response.ok) {
    throw new Error("Error en la ejecucion de la api");
  }
  const booksData: BookReference = await response.json();
  console.log(booksData)
  return booksData;
  
};