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