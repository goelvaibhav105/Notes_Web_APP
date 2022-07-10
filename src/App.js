import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
// import DUMMY_NOTES from './DUMMY_NOTES';
import Note from './components/Note';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createNote,
  deleteNote,
  getNotes,
  updateNote,
} from "./services/notesService";

import {UncontrolledTooltip} from 'reactstrap'

import { Button, FloatingLabel, Modal, Form } from "react-bootstrap";


function App() {
  const [notesList, setNotesList] = useState([]);
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  const [newNote, setNewNote] = useState({
    link: "",
    text: "",
  });


  const handleCloseAddModal = () => {
    // we are setting them as empty things bacuse suppose someone create a NOTE 1 ,
     // and save it then if we dont set it null then Note 1 will be in a Prev state and 
      // will impose and create a same note ... So we have to set it  nulll when we close it 
    setNewNote({
      link: "",
      text: "",
    });
    setShowAddNoteModal(false);
  };
  const handleShowAddModal = () => setShowAddNoteModal(true);

  

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

  const addNote = async () => {
    const savedNote = await createNote(newNote);
    // this is setting on frountend means previous noteList and current note both are merged and saved 
    setNotesList([...notesList, savedNote]);
    handleCloseAddModal();
  };

  const deleteNoteItem = async (noteToDelete) => {
    await deleteNote(noteToDelete._id);
    // here we are filtering where id is not same ... means other one except this 
    const remainingNotes = notesList.filter((noteItem) => {
      return noteItem._id !== noteToDelete._id;
    });
    setNotesList(remainingNotes);
  };

  const updateNoteItem = async (updatedNote) => {
    const noteFromServer = await updateNote(updatedNote);
    // temporary variable
    const updatedList = notesList.map((noteItem) => {
      if (noteItem._id === noteFromServer._id) {
        return noteFromServer;
      }
      return noteItem;
    });
    setNotesList(updatedList); // updating the state of notes list
  };
  

  // const updateNoteItem = (updatedNote) =>{
  //  //map fnc will create the new array means updated array
  //  const updatedList = notesList.map((noteItem)=>{
  //    if(noteItem._id === updatedNote._id){
  //     return updatedNote;
  //    }
  //    return noteItem;
  //  })
  //  setNotesList(updatedList)
  // }

  return (
    <div className="App">
            <Button
        variant="dark"
        className="add-button"
        onClick={handleShowAddModal}
        id='create-note'
      >

        <div className="add-button-text">+</div>
        <UncontrolledTooltip placement="right" target="create-note">
        Create Your Notes !!!
      </UncontrolledTooltip>
      </Button>

      <Modal show={showAddNoteModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea2" label="Text">
            <Form.Control
            // here we are setting our new note 
              onChange={(event) => {
                const newVal = event.currentTarget.value;
                setNewNote({
                  // we are taking other value same and updating text property 
                  ...newNote,
                  text: newVal,
                });
              }}
              as="textarea"
              placeholder="Enter your note text"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Link"
            className="mb-3 note-link"
          >
            <Form.Control
              onChange={(event) => {
                const newVal = event.currentTarget.value;
                setNewNote({
                         // keep all other value same and updating link value 
                  ...newNote,
                  link: newVal,
                });
              }}
              type="url"
              placeholder="Enter note url"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>
            Close
          </Button>
          <Button variant="primary" onClick={addNote}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    <div className='headerTop'>
        <h3>Save Your Notes</h3>
        <span>You can save anything you want</span>
      </div>
      <div className="notes-list">
        {notesList && notesList.map((note,index) => {
         return <Note
         note={note}
         onNoteUpdate={updateNoteItem}
         onNoteDelete={deleteNoteItem}
         key={index}
         />
        })}
      </div>
    </div>
  );
}

export default App;
