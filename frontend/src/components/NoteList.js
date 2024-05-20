import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const NoteList = ({ notes, onUpdateNote, onDeleteNote, onArchiveNote }) => {
  return (
    <div className='text-light fw-bold text-center d-flex justify-content-center align-items-center'>
      <div className='border-bottom'>
        <h3 className='my-3 text-light fw-bold'>ACTIVE NOTES</h3>
        {notes.map(note => (
          <div key={note.id} className='m-2 d-flex justify-content-center align-items-center'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{note.category}</Card.Subtitle>
                <Card.Text>
                  {note.content}
                </Card.Text>
                <div className='m-2'>
                  <Button className='me-1' variant="secondary" onClick={() => onUpdateNote(note)}>Update</Button>
                  <Button className='me-1' variant="secondary" onClick={() => onDeleteNote(note.id)}>Delete</Button>
                  <Button className='' variant="secondary" onClick={() => onArchiveNote(note.id, true)}>Archive</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;

