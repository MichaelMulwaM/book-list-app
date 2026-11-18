import { useState } from 'react';

function AddBookForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;

    onAdd({
      id: Date.now(), // Simple unique ID
      title,
      author,
      genre: genre || 'General',
      year: year || 'N/A',
    });

    setTitle('');
    setAuthor('');
    setGenre('');
    setYear('');
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author *"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Genre (e.g., Sci-Fi)"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit" className="add-btn">Add Book</button>
    </form>
  );
}