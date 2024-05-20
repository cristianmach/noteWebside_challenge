const Note = require('../models/note'); 

// Función para crear una nota
const createNote = async (noteData) => {
  return await Note.create(noteData);
};

// Función para obtener todas las notas, con filtro opcional para archivadas
const getNotes = async (archived = false) => {
  return await Note.findAll({ where: { archived } });
};

// Función para actualizar una nota
const updateNote = async (id, noteData) => {
  const note = await Note.findByPk(id);
  if (note) {
    return await note.update(noteData);
  }
  return null;
};

// Función para eliminar una nota
const deleteNote = async (id) => {
  const note = await Note.findByPk(id);
  if (note) {
    await note.destroy();
    return true;
  }
  return false;
};

// Función para archivar o desarchivar una nota
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

