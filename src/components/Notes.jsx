import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem.jsx'

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, fetchNotes} = context;

    useEffect(()=>{
        fetchNotes();
    },[])
    

    return (
        <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <NoteItem key={note._id} note={note} />
            })}

        </div>
    )
}

export default Notes
