import React, { useState } from 'react';

// Create a new Note
const NoteForm = ({ onCreateNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onCreateNote({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter the title..."
        required
      />

      <input
        type="text"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="Enter the content..."
        required
      />

      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
