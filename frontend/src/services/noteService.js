import axios from 'axios'; 

// http request to backend server :)

const API_URL = 'http://localhost:3001/api/notes';

export const createNote = async (note) => {
  try {
    const response = await axios.post(API_URL, note);
    return response.data;
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
};

export const getNotes = async (archived = false) => {
  try {
    const response = await axios.get(API_URL, { params: { archived } });
    return response.data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error;
  }
};

export const updateNote = async (id, note) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, note);
    return response.data;
  } catch (error) {
    console.error("Error updating note:", error);
    throw error;
  }
};

export const deleteNote = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting note:", error);
    throw error;
  }
};

export const archiveNote = async (id, archived) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}/archive`, { archived });
    return response.data;
  } catch (error) {
    console.error("Error archiving note:", error);
    throw error;
  }
};

