import React, { useContext } from 'react'
import EditNote from './EditNote';
import NoteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const {note} = props;
    const context = useContext(NoteContext);
    const {editNote, deleteNote} = context;

    // function editNote(){
    //     <EditNote title={note.title} content={note.content}/>
    //     console.log("edit note");
    // }



    return (
        <div className="col-md-3">
            <div className="card">
                <div value={note._id} className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.content}</p>
                    <i className="fa-solid fa-pen mx-3" onClick={(e)=>{
                        
                    }}></i>
                    <i name="delete" id={note._id} className="fa-solid fa-trash mx-3" onClick={(e)=>{
                        console.log(e.target.id)
                        deleteNote(e.target.id);
                        e.preventDefault();
                    }}></i>                    
                </div>
            </div>
        </div>
    )
}

export default NoteItem