const Note = require('../models/note'); 

const createNote = async (noteData) => {
  return await Note.create(noteData);
};

const getNotes = async (archived = false) => {
  return await Note.findAll({ where: { archived } });
};

const updateNote = async (id, noteData) => {
  const note = await Note.findByPk(id);
  if (note) {
    return await note.update(noteData);
  }
  return null;
};

const deleteNote = async (id) => {
  const note = await Note.findByPk(id);
  if (note) {
    await note.destroy();
    return true;
  }
  return false;
};

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
