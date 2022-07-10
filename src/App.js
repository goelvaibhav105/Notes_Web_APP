import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
// import DUMMY_NOTES from './DUMMY_NOTES';
import Note from './components/Note';
import {
  createNote,
  deleteNote,
  getNotes,
  updateNote,
} from "./services/notesService";


function App() {
  const [notesList, setNotesList] = useState([]);

  //so what happen when we set notes ... then it will go into a loopp which is then bypass by using a useEffect method

  useEffect(() => {
    // const listFromStorageStr = localStorage.getItem("notess")
    getNotesFromServer();
  }, [])

//creating a function where i can use async and await to call the notes from  backend 

  const getNotesFromServer = async () => {
    const notes = await getNotes();
    setNotesList(notes);
  };

  useEffect(() => {
    if(notesList.length > 0 ){
      const  notesListString = JSON.stringify(notesList)
      localStorage.setItem('notess',notesListString)
    }
  }, [notesList]);


  const updateNoteItem = (updatedNote) =>{
   //map fnc will create the new array means updated array
   const updatedList = notesList.map((noteItem)=>{
     if(noteItem._id === updatedNote._id){
      return updatedNote;
     }
     return noteItem;
   })
   setNotesList(updatedList)
  }

  return (
    <div className="App">
      <div className='headerTop'>
        <h3>Save Your Notes</h3>
        <span>You can save anything you want</span>
      </div>
      <div className="notes-list">
        {notesList && notesList.map((note,index) => {
         return <Note
         note={note}
         onNoteUpdate={updateNoteItem}
         key={index}
         />
        })}
      </div>
    </div>
  );
}

export default App;
