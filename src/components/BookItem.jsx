function BookItem({ book, onDelete }) {
  return (
    <div className="book-card">
      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="author">by {book.author}</p>
        <span className="genre">{book.genre} • {book.year}</span>
      </div>
      <button 
        className="delete-btn" 
        onClick={() => onDelete(book.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default BookItem;