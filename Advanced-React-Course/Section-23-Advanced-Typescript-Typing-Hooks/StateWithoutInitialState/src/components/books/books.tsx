import { Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';
import './books.css';
import { Book, fetchBooks } from '../../App';

type BooksProps = {
  setBooks: Dispatch<SetStateAction<Book[]>>;
};

export const Books = ({
  children,
  setBooks,
}: PropsWithChildren<BooksProps>) => {
  const [count, setCount] = useState(10);
  return (
    <section className='book-list gap-8'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchBooks(count).then(setBooks);
        }}
      >
        <label htmlFor='number-of-books-to-load' className='book-form-label'>
          Number of Books to Load
        </label>
        <div className='flex'>
          <input
            id='number-of-books-to-load'
            className='book-input w-full'
            type='number'
            min='0'
            max='20'
            value={count}
            onChange={(e) => setCount(e.target.valueAsNumber)}
          />
          <button type='submit' className='book-button'>
            Load Books
          </button>
        </div>
      </form>
      <div className='book-grid'>{children}</div>
    </section>
  );
};

export default Books;
