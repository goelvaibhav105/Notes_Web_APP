import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import DUMMY_NOTES from './DUMMY_NOTES';
import Note from './components/Note';


function App() {
  const [notesList, setNotesList] = useState([]);

  //so what happen when we set notes ... then it will go into a loopp which is then bypass by using a useEffect method

  useEffect(() => {
    const listFromStorageStr = localStorage.getItem("notess")
    if(listFromStorageStr){
      const listFromStorageArr = JSON.parse(listFromStorageStr)
      setNotesList(listFromStorageArr)
    }else{
      setNotesList(DUMMY_NOTES)
    } 
  }, [])

  useEffect(() => {
    if(notesList.length > 0 ){
      const  notesListString = JSON.stringify(notesList)
      localStorage.setItem('notess',notesListString)
    }
  }, [notesList]);



  // const getNotes = async () => {
  //   try {
  //     const response = await axios.get(
  //       'http://localhost:5000/notes'
  //     )
  //     setNotesList(response.data.notes)
  //     console.log('notesList',notesList,notesList.length);
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

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
      <div className="notes-list">
        {notesList.map((note,index) => {
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
