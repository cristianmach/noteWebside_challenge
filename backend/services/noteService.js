const Note = require('../models/note');

//CRUD

// Funct create a note :)
const createNote = async (noteData) => {
  return await Note.create(noteData);
};

// Funct get notes and filter :)
const getNotes = async (archived = false) => {
  return await Note.findAll({ where: { archived } });
};

// Funct update notes :)
const updateNote = async (id, noteData) => {
  const note = await Note.findByPk(id);
  if (note) {
    return await note.update(noteData);
  }
  return null;
};

// Funct delete notes :)
const deleteNote = async (id) => {
  const note = await Note.findByPk(id);
  if (note) {
    await note.destroy();
    return true;
  }
  return false;
};

// Funct archive notes :)
const archiveNote = async (id, archived) => {
  const note = await Note.findByPk(id);
  if (note) {
    note.archived = archived;
    await note.save();
    return note;
  }
  return null;
};

module.exports = { createNote, getNotes, updateNote, deleteNote, archiveNote };

