// En App.js
import React, { useState, useEffect } from 'react';
import { createNote, getNotes, updateNote, deleteNote, archiveNote } from './services/noteService';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import ArchivedNotes from './components/ArchivedNotes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);

  const fetchNotes = async () => {
    const activeNotes = await getNotes(false);
    const archived = await getNotes(true);
    setNotes(activeNotes);
    setArchivedNotes(archived);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleCreateNote = async (note) => {
    await createNote(note);
    fetchNotes();
  };

  const handleUpdateNote = async (id, note) => {
    await updateNote(id, note);
    fetchNotes();
  };

  const handleDeleteNote = async (id) => {
    await deleteNote(id);
    fetchNotes();
  };

  const handleArchiveNote = async (id, archived) => {
    await archiveNote(id, archived);
    fetchNotes();
  };

  return (
    <div className='p-2 mb-5' id='out'>
      <h1 className='text-center fw-bold my-3' id='title'>Note Taking App</h1>
      <div className='text-center border border-dark-subtle border-4 rounded-4 m-5' id='in'>
        <NoteForm className='border-bottom' onCreateNote={handleCreateNote} />
        <NoteList className='d-flex' notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} onArchiveNote={handleArchiveNote} />
        <ArchivedNotes notes={archivedNotes} onArchiveNote={handleArchiveNote} />
      </div>
    </div>
  );
};

export default App;
