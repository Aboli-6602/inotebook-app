import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem.jsx'
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, fetchNotes, editNote } = context;
    const ref = useRef(null);
    const refClose = useRef(null);
    let Navigate = useNavigate();
    let [eNote, setNote] = useState({
        id: "",
        eTitle: "",
        eContent: "",
        eTag: ""
    });

    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            fetchNotes();
        }
        else {
            Navigate('/login');
        }
        // eslint-disable-next-line
    }, [])



    const updateNote = (currentNote) => {
        setNote({ id: currentNote._id, eTitle: currentNote.title, eContent: currentNote.content, eTag: currentNote.tag });
        ref.current.click();
    }



    const handleChange = (e) => {
        let { name, value } = e.target;
        setNote((prevValue) => {
            return (eNote = {
                ...prevValue,
                [name]: value
            })
        })
    }

    const handleClick = () => {
        editNote(eNote.id, eNote.eTitle, eNote.eContent, eNote.eTag);
        refClose.current.click();
    }


    return (
        <>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="mb-3 col-md-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                    <input type="text" name='eTitle' value={eNote.eTitle} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3 col-md-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                    <textarea type="text" name='eContent' value={eNote.eContent} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3 col-md-3">
                                    <label htmlFor="Tag" className="form-label">Tag</label>
                                    <input type="text" name='eTag' value={eNote.eTag} onChange={handleChange} className="form-control" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal">Discard changes</button>
                            <button disabled={eNote.eTitle.length < 5 || eNote.eContent.length < 5} type="button" className="btn btn-outline-primary" onClick={handleClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Notes</h2>
                <hr />
                <div className="container">
                    {notes.length === 0 && ' You do not have any notes'}
                </div>
                
                {notes.map((note) => {
                        return <NoteItem key={note._id} note={note} updateNote={updateNote} />
                    
                })}
            </div>
        </>
    )
}

export default Notes
