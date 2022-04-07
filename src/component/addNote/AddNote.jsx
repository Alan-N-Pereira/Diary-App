import './addNote.css'

export default function AddNote({setAddMode}) {
  return (
    <div className='addNote-container' onClick={()=>setAddMode(true)}>
        <div className="add">
            <i className="add-icon fa-solid fa-circle-plus"></i>
        </div>
        <div className="addNote-title">Add Note</div>
    </div>
  )
}
