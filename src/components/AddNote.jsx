import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import '../App.css'

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  let [note, setNote] = useState({
    title: "",
    content: "",
    tag: ""
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setNote((prevValue) => {
      return (note = {
        ...prevValue,
        [name]: value
      })
    })
  }

  return (
    <div id='addNote'>
    <h2 id='addHeading'>Add a Note</h2>
      <form >
        <div className="mb-3 col-md-8">
          <label htmlFor="Title" className="form-label">Title</label>
          <input type="text" name='title' value={note.title} onChange={handleChange} className="form-control" placeholder='Should be atleast 5 characters long' />
        </div>
        <div className="mb-3 col-md-8">
          <label htmlFor="Description" className="form-label">Description</label>
          <textarea type="text" name='content' value={note.content} onChange={handleChange} className="form-control" placeholder='Should be atleast 5 characters long' />
        </div>
        <div className="mb-3 col-md-3">
          <label htmlFor="Tag" className="form-label">Tag</label>
          <input type="text" name='tag' value={note.tag} onChange={handleChange} className="form-control" />
        </div>
        <button id='addBtn' disabled={note.title.length<5 || note.content.length<5} type="submit" className="btn btn-outline-primary" onClick={(e) => {
          
          addNote(note);
          setNote({
            title: "",
            content: "",
            tag: ""
          });
          e.preventDefault();
        }}><span>Add Note</span></button>
      </form>
    </div>
  )
}

export default AddNote
