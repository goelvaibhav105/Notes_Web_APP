import React from 'react'
import '../style/Note.css';

export default function Note(props) {

  const noteTextUpdated = (event) => {
    console.log(event.currentTarget.textContent, "textCHNAGED ")
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
