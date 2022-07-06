import React from 'react'
import '../style/Note.css';

export default function Note(props) {
  return (
    <div className='note'>
        <div className='note__text'>{props.note.text}</div>
        <div className='note__link'>{props.note.link}</div>
    </div>
  )
}
