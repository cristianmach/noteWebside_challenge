import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Show note list, filter, update, remove, and archived.

const NoteList = ({ notes, onUpdateNote, onDeleteNote, onArchiveNote }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [editingNote, setEditingNote] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('IMPORTANT');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredNotes = selectedCategory === 'ALL'
    ? notes
    : notes.filter(note => note.category === selectedCategory);

  const handleEditClick = (note) => {
    setEditingNote(note);
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
  };

  const handleSaveClick = () => {
    onUpdateNote(editingNote.id, { title, content, category });
    setEditingNote(null);
  };

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
                  <Button className='me-1' variant="secondary" onClick={() => handleEditClick(note)}>Edit</Button>
                  <Button className='me-1' variant="secondary" onClick={() => onDeleteNote(note.id)}>Delete</Button>
                  <Button className='' variant="secondary" onClick={() => onArchiveNote(note.id, true)}>Archive</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {editingNote && (
        <div className='text-center'>
          <h3 className='my-3 text-light fw-bold'>EDIT NOTE</h3>
          <Form className='p-3'>
            <Form.Group className="mb-3">
              <Form.Label className='text-light fw-bold'>TITLE</Form.Label>
              <Form.Control 
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Enter the title..."
                required className='bg-gray'
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='text-light fw-bold'>CONTENT</Form.Label>
              <Form.Control
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Enter the content..."
                required as="textarea"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='text-light fw-bold'>CATEGORY</Form.Label>
              <Form.Select 
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="IMPORTANT">IMPORTANT</option>
                <option value="IT CAN WAIT">IT CAN WAIT</option>
                <option value="NAHHH">NAHHH</option>
              </Form.Select>
            </Form.Group>
            <Button variant="secondary" onClick={handleSaveClick}>Save</Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default NoteList;
