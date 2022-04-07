import {useState} from 'react'
import './noteInput.css'

export default function NoteInput({handleAddNote ,setAddMode}) {

    const[title,setTitle] = useState('')
    const[text,setText] = useState('')
    const[date,setDate] = useState('')

    const characterLimit = 200

    const handleSave =()=>{
        if(title.trim().length > 0 && text.trim().length > 0 && date.length !== 0){
            handleAddNote(title,text,date)
            setAddMode(false)
            setTitle('')
            setText('')
            setDate('')
        }
    }

  return (
    <div className='noteInput-container'>
        <input type='text' className="title-input" placeholder='Add a title' onChange={(e)=>setTitle(e.target.value)}/>
        <textarea className='text-input' cols="10" rows="8" placeholder='Type to add a note...' onChange={(e)=>{
            if(characterLimit - e.target.value.length >= 0){
                setText(e.target.value)
                }}}/>
        <div className="noteInput-footer">
            <input type="date" className='date-input' onChange={(e)=>setDate(e.target.value)} />
            <div className="add-button-container">
                <small className='count'>{characterLimit - text.length} remaining</small>
                <button className='save' onClick={handleSave}>Add</button>
            </div>
        </div>
    </div>
  )
}
