import React from 'react';

const ArchivedNotes = ({ notes, onArchiveNote }) => {
  return (
    <div>
      <h2>Archived Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => onArchiveNote(note.id, false)}>Restore</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArchivedNotes;
