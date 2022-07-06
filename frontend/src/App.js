import './App.css';
import axios from 'axios'
import { useState,useEffect } from 'react';


function App() {
  const  [notesList,setNotesList] = useState([]);
  const getNotes = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/notes'
      )
      setNotesList(response.data.notes)
      console.log('notesList',notesList,notesList.length);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <h1>Notes Application</h1>
      <div>
        <button onClick={getNotes}>
          Click me !
        </button>
      </div>
     {notesList.length > 0 ?  <div>
        <h4>SHOW DETAILS</h4>
         <h5>{notesList ? notesList[0].text : ''}</h5>
         <span>{notesList ? notesList[0].link : ''}</span>
      </div>:<>click above button</>}
    </div>
  );
}

export default App;
