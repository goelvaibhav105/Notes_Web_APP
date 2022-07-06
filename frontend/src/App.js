import './App.css';
import axios from 'axios'
import { useState,useEffect } from 'react';
import DUMMY_NOTES from './DUMMY_NOTES';


function App() {
  const  [notesList,setNotesList] = useState([]);

  //so what happen when we set notes ... then it will go into a loopp which is then bypass by using a useEffect method
  
  useEffect (()=>{
    setNotesList(DUMMY_NOTES)
  },[])
  
  
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

  return (
    <div className="App">
      <h1>Notes Application</h1>
     {notesList.length > 0 ?  <div>
        <h4>SHOW DETAILS</h4>
         <h5>{notesList ? notesList[0].text : ''}</h5>
         <span>{notesList ? notesList[0].link : ''}</span>
      </div>:<>click above button</>}
    </div>
  );
}

export default App;
