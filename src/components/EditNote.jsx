import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';

const EditNote = (props) => {
    const title = props.title;
    const content = props.content;
    const context = useContext(NoteContext);
    const {editNote} = context;

    console.log("delete note");
    function handleChange(){

    }

  return (
    <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                <input type="text" name='title' value={title} onChange={handleChange} className="form-control" />
                <input type="text" name='title' value={title} onChange={handleChange} className="form-control" />

                </div>
            </div>
    </div>
  )
}

export default EditNote
