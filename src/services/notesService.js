import axios from "axios";
import { NOTES_API_URL } from "../constants/api";


export const getNotes = async () => {
  try {
    const response = await axios.get(NOTES_API_URL);
    // What the component want should be here our want an array of notes 
    return response.data.notes;
  } catch (error) {
    console.error(error);
  }
};

export const createNote = async (newNote) => {
  try {
    const response = await axios.post(NOTES_API_URL, newNote);
    return response.data.note;
  } catch (error) {
    console.error(error);
  }
};

export const deleteNote = async (noteToDeleteId) => {
  try {
    const url = `${NOTES_API_URL}/${noteToDeleteId}`;
    const response = await axios.delete(url);
    // reply is same we put in our backend api reposne that is delete note id  by success
    return response.data.reply;
  } catch (error) {
    console.error(error);
  }
};

export const updateNote = async (noteToUpdate) => {
  try {
    const url = `${NOTES_API_URL}/${noteToUpdate._id}`;
    const response = await axios.put(url, noteToUpdate);
    return response.data.note;
  } catch (error) {
    console.error(error);
  }
};
