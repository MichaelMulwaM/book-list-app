import { useState } from 'react';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import './App.css';

const INITIAL_BOOKS = [
  { id: 1, title: 'Things Fall Apart', author: 'Chinua Achebe', genre: 'Classic Fiction', year: 1958 },
  { id: 2, title: 'Dune', author: 'Frank Herbert', genre: 'Sci-Fi', year: 1965 },
  { id: 3, title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', year: 2018 },
  { id: 4, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', year: 1988 },
  { id: 5, title: '1984', author: 'George Orwell', genre: 'Dystopian', year: 1949 },
];

function App() {
  const [books, setBooks] = useState(INITIAL_BOOKS);

  const handleAddBook = (newBook) => {
    setBooks([newBook, ...books]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="app-container">
      <header>
        <h1>My Reading List</h1>
        <p>Total Books: {books.length}</p>
      </header>

      <main>
        <AddBookForm onAdd={handleAddBook} />
        <BookList books={books} onDelete={handleDeleteBook} />
      </main>
    </div>
  );
}

export default App;