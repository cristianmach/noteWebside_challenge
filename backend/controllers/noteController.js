const NoteService = require('../services/noteService');

const createNote = async (req, res) => {
  const { title, content } = req.body;
  const note = await NoteService.createNote({ title, content });
  res.json(note);
};

const getNotes = async (req, res) => {
  const archived = req.query.archived === 'true';
  const notes = await NoteService.getNotes(archived);
  res.json(notes);
};

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const note = await NoteService.updateNote(id, { title, content });
  if (note) {
    res.json(note);
  } else {
    res.status(404).send('Note not found');
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;
  const success = await NoteService.deleteNote(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send('Note not found');
  }
};

const archiveNote = async (req, res) => {
  const { id } = req.params;
  const { archived } = req.body;
  const note = await NoteService.archiveNote(id, archived);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send('Note not found');
  }
};

module.exports = { createNote, getNotes, updateNote, deleteNote, archiveNote };
