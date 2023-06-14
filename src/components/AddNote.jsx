import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  let [note, setNote] = useState({
    title: "",
    content: "",
    tag: "default"
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
    <div>
      <form >
        <div className="mb-3 col-md-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input type="text" name='title' value={note.title} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3 col-md-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <textarea type="text" name='content' value={note.content} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn" onClick={(e) => {
          
          addNote(note);
          setNote({
            title: "",
            content: "",
            tag: "default"
          });
          e.preventDefault();
        }}><i className="fa-solid fa-circle-plus"></i></button>
      </form>
    </div>
  )
}

export default AddNote
