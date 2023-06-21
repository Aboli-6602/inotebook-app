import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000";

    let [notes, setNotes] = useState([{}]);

    const fetchNotes = async ()=>{
        const response = await fetch(`${host}/api/notes/fetchnotes`, {
            method: "GET",
            headers: {
              "auth-token": localStorage.getItem('authToken'),
              'Content-Type': 'application/json',
            }
          });
          let json = await response.json();
        //   console.log(json);
          setNotes(json);
    }

    
    async function addNote(note) {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('authToken')
            },
            body: JSON.stringify(note)
          });
        
        setNotes((prevNotes) => {
            return (notes = [...prevNotes, note]);
        })
    }

    async function editNote(id, title, content, tag) {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem('authToken'),
            },
            body: JSON.stringify({title, content, tag})
          });

          let newNotes = JSON.parse(JSON.stringify(notes));  // to directly see the change without the need to refresh
          for(let i=0; i<newNotes.length; i++){
            if(newNotes[i]._id === id){
              newNotes[i].title = title;
              newNotes[i].content = content;
              newNotes[i].tag = tag;
              break;
            }
          }

          setNotes(newNotes);
        
    }

    async function deleteNote(id) {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
              "auth-token": localStorage.getItem('authToken')
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }
          });

        setNotes(() => {
            return notes.filter((note) => {
                return (id !== note._id);
            })
        })


    }

    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
