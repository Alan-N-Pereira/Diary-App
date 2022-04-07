
import { useState } from 'react'
import AddNote from '../addNote/AddNote'
import Note from '../note/Note'
import NoteInput from '../noteInput/NoteInput'
import './noteList.css'

export default function NoteList({notes, handleAddNote, handleDeleteNote}) {
  const [addMode,setAddMode] = useState(false)
  // console.log(addMode)
  return (
    <div className='noteList-container'>
      {addMode ? <NoteInput handleAddNote={handleAddNote} setAddMode={setAddMode}/>: <AddNote setAddMode={setAddMode}/>}
      {notes.map((note)=><Note key={note.id} note={note} handleDeleteNote={handleDeleteNote}/>)}
    </div>
  )
}
