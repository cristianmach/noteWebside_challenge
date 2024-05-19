import React from 'react';

const NoteList = ({ notes, onUpdateNote, onDeleteNote, onArchiveNote }) => {
  return (
    <div>
      <h2>Active Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => onUpdateNote(note.id, { text: 'Updated Text' })}>Update</button>
            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            <button onClick={() => onArchiveNote(note.id, true)}>Archive</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
