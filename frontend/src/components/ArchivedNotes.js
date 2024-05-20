import React from 'react';
import Button from 'react-bootstrap/Button';

const ArchivedNotes = ({ notes, onArchiveNote }) => {
  return (
    <div>
      <h3 className='my-3 text-light fw-bold'>ARCHIVED NOTES</h3>
      <div>
        {notes.map(note => (
          <div key={note.id}>
            {note.text}
            <Button className='mb-2' variant="secondary" onClick={() => onArchiveNote(note.id, false)}>{note.title}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchivedNotes;
