import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Create a new note on base form
const NoteForm = ({ onCreateNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('IMPORTANT'); // defoult 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !content.trim() || !category.trim()) return;
    onCreateNote({ title, content, category });
    setTitle('');
    setContent('');
    setCategory('IMPORTANT'); // reset value initial
  };

  return (
    <div className='text-center d-flex justify-content-center align-items-center'>
      <div className='border-bottom'>
        <h3 className='my-3 text-light fw-bold'>CREATE NOTES</h3>
        <Form onSubmit={handleSubmit} className='p-3 '>
          <Form.Group className="mb-3">
            <Form.Label className='text-light fw-bold' >TITLE</Form.Label>
            <Form.Control 
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter the title..."
              required className='bg-gray' 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className='text-light fw-bold' >CONTENT</Form.Label>
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
              value={category} // Asegurar que el valor del select se actualice correctamente
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="IMPORTANT">IMPORTANT</option>
              <option value="IT CAN WAIT">IT CAN WAIT</option>
              <option value="NAHHH">NAHHH</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" variant="secondary">ADD NOTE</Button>
        </Form>
      </div>
    </div>
  );
};

export default NoteForm;
