import {useEffect, useState} from 'react'
import './editNote.css'

export default function EditNote({note ,handleUpdateNote ,setUpdateMode}) {

    const[title,setTitle] = useState('')
    const[text,setText] = useState('')
    const[date,setDate] = useState('')

    const characterLimit = 200

    useEffect(()=>{
        setTitle(note.title);
        setText(note.text);
        setDate(note.date);
    },[])

    const handleSave =()=>{
        if(title.trim().length > 0 && text.trim().length > 0 && date.length !== 0){
            handleUpdateNote(note.id ,title,text,date)
            setUpdateMode(false)
            setTitle('')
            setText('')
            setDate('')
        }
    }

  return (
    <div className='noteInput-container'>
        <input type='text' className="title-input" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea className='text-input' cols="10" rows="8" value={text} onChange={(e)=>{
            if(characterLimit - e.target.value.length >= 0){
                setText(e.target.value)
                }}}/>
        <div className="noteInput-footer">
            <input type="date" className='date-input' value={date} onChange={(e)=>setDate(e.target.value)} />
            <div className="add-button-container">
                <small className='count'>{characterLimit - text.length} remaining</small>
                <button className='save' onClick={handleSave}>Update</button>
            </div>
        </div>
    </div>
  )
}