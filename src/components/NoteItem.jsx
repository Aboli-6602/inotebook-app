import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';
import ThemeContext from '../context/themes/themeContext';

const NoteItem = (props) => {
    const {note, updateNote} = props;
    const nContext = useContext(NoteContext);
    const {deleteNote} = nContext;
    const tContext = useContext(ThemeContext);
    const {style} = tContext;

    return (
        <div className="col-md-8 my-3">
            <div className="card" style={style.textArea}>
                <div value={note._id} className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <span className="badge text-bg-secondary">{note.tag}</span>
                    <p className="card-text">{note.content}</p>
                    <i className="fa-solid fa-pen mx-3" onClick={(e)=>{
                        updateNote(note);
                    }}></i>
                    <i name="delete" id={note._id} className="fa-solid fa-trash mx-3" onClick={(e)=>{
                        // console.log(e.target.id)
                        deleteNote(e.target.id);
                        e.preventDefault();
                    }}></i>                    
                </div>
            </div>
        </div>
    )
}

export default NoteItem
