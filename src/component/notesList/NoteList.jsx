
import AddNote from '../addNote/AddNote'
import Note from '../note/Note'
import './noteList.css'

export default function NoteList({notes}) {
  return (
    <div className='noteList-container'>
      <AddNote/>
      {notes.map((note)=><Note key={note.id} note={note}/>)}
    </div>
  )
}
