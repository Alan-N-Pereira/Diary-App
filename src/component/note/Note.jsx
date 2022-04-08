import { useState } from 'react'
import EditNote from '../editNote/EditNote'
import './note.css'

export default function Note({note, handleDeleteNote , handleUpdateNote}) {
  const [updateMode,setUpdateMode] = useState(false)
  return (
    updateMode ? <EditNote handleUpdateNote={handleUpdateNote} note={note} setUpdateMode={setUpdateMode}/> :
    
      <div className='note-container'>
          <div className="text-contianer">
            <div className="note-title">{note.title}</div>
            <div className="note-text">{note.text}</div>
          </div>
          
          <div className="note-footer">
              <div className="date">{note.date}</div>
              <div className="edit">
                  <i className='note-icon far fa-edit' onClick={()=>{setUpdateMode(true)}}></i>
                  <i className='note-icon far fa-trash-alt' onClick={()=>handleDeleteNote(note.id)}></i>
              </div>
          </div>
      </div>
  )
}
