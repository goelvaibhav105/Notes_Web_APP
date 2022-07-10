import React,{useState} from 'react'
import '../style/Note.css';

export default function Note(props) {
  const [isFocused, setIsFocused] = useState(false)
  const noteTextUpdated = (event) => {
    setIsFocused(false);
    const newTextValue = event.currentTarget.textContent;
    if(newTextValue === props.note.text){
      return ;
    }
    const updatedNoteObject = {...props.note,text:newTextValue || ''}
    props.onNoteUpdate(updatedNoteObject)
  }
  console.log(isFocused,"isFocused")


  return (
    <div className={isFocused ? "note note--focused" : "note"}>
      <div className='note__text'
        onBlur={noteTextUpdated}
        onFocus={()=>{
setIsFocused(true)
        }}
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        {props.note.text}
      </div>
      <div className='note__link'>{props.note.link}</div>
    </div>
  )
}
