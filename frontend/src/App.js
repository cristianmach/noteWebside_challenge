import React, { useState, useEffect } from 'react';
import { createNote, getNotes, updateNote, deleteNote, archiveNote } from './services/noteService';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import ArchivedNotes from './components/ArchivedNotes';

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
    <div>
      <h1>Note Taking App</h1>
      <NoteForm onCreateNote={handleCreateNote} />
      <NoteList notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} onArchiveNote={handleArchiveNote} />
      <ArchivedNotes notes={archivedNotes} onArchiveNote={handleArchiveNote} />
    </div>
  );
};

export default App;
