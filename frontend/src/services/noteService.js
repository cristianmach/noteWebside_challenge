import axios from 'axios';

// Backend PORT listening 
const API_URL = 'http://localhost:3000/api/notes';

export const createNote = async (note) => {
  const response = await axios.post(API_URL, note);
  return response.data;
};

export const getNotes = async (archived = false) => {
  const response = await axios.get(API_URL, { params: { archived } });
  return response.data;
};

export const updateNote = async (id, note) => {
  const response = await axios.put(`${API_URL}/${id}`, note);
  return response.data;
};

export const deleteNote = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const archiveNote = async (id, archived) => {
  const response = await axios.patch(`${API_URL}/${id}/archive`, { archived });
  return response.data;
};
