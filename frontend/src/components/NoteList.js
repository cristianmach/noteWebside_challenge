import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//show list Notes and filter for category
const NoteList = ({ notes, onUpdateNote, onDeleteNote, onArchiveNote }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL'); 

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredNotes = selectedCategory === 'ALL'
    ? notes
    : notes.filter(note => note.category === selectedCategory);

  return (
    <div className='text-light fw-bold text-center d-flex flex-column align-items-center'>
      <div className='border-bottom'>
        <h3 className='my-3 text-light fw-bold'>ACTIVE NOTES</h3>
        <Form.Group className="mb-3">
          <Form.Label className='text-light fw-bold'>FILTER BY CATEGORY</Form.Label>
          <Form.Select 
            value={selectedCategory} 
            onChange={handleCategoryChange}
            className='mb-3'
          >
            <option value="ALL">ALL</option>
            <option value="IMPORTANT">IMPORTANT</option>
            <option value="IT CAN WAIT">IT CAN WAIT</option>
            <option value="NAHHH">NAHHH</option>
          </Form.Select>
        </Form.Group>
        {filteredNotes.map(note => (
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


