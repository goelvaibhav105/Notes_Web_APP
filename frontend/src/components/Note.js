import React from 'react'
import '../style/Note.css';

export default function Note(props) {

  const noteTextUpdated = (event) => {
    const newTextValue = event.currentTarget.textContent;
    if(newTextValue === props.note.text){
      return ;
    }
    const updatedNoteObject = {...props.note,text:newTextValue || ''}
    props.onNoteUpdate(updatedNoteObject)
  }


  return (
    <div className='note' >
      <div className='note__text'
        onBlur={noteTextUpdated}
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        {props.note.text}
      </div>
      <div className='note__link'>{props.note.link}</div>
    </div>
  )
}
