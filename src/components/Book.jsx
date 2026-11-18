import BookItem from './BookItem';

function BookList({ books, onDelete }) {
  if (books.length === 0) {
    return <p className="empty-message">No books in your list yet. Add one above!</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem 
          key={book.id} 
          book={book} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}

export default BookList;