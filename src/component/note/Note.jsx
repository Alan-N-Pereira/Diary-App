import './note.css'

export default function Note({note, handleDeleteNote}) {
  return (
    <div className='note-container'>
        <div className="text-contianer">
          <div className="note-title">{note.title}</div>
          <div className="note-text">{note.text}</div>
        </div>
        
        <div className="note-footer">
            <div className="date">{note.date}</div>
            <div className="edit">
                <i className='note-icon far fa-edit'></i>
                <i className='note-icon far fa-trash-alt' onClick={()=>handleDeleteNote(note.id)}></i>
            </div>
        </div>
    </div>
  )
}
