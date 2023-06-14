import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000";

    const initialNotes = [
        {
            "_id": "64331b664b9u77d5ba24a05bef",
            "user": "6433021c2a0851807f231a10",
            "title": "updated title",
            "content": "come back on track",
            "tag": "self motivates",
            "date": "2023-04-09T20:09:10.522Z",
            "__v": 0
        }
    ]

    let [notes, setNotes] = useState(initialNotes);

    const fetchNotes = async ()=>{
        const response = await fetch(`${host}/api/notes/fetchnotes`, {
            method: "GET",
            headers: {
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMzAyMWMyYTA4NTE4MDdmMjMxYTEwIn0sImlhdCI6MTY4MTA2NDQ3Nn0.RD9PmUTAFb5L07CDmrhYo-MgBjS_vebkYkYmG0zGAxc",
              'Content-Type': 'application/json',
            }
          });
          let json = await response.json();
          console.log(json);
          setNotes(json);
    }

    
    async function addNote(note) {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMzAyMWMyYTA4NTE4MDdmMjMxYTEwIn0sImlhdCI6MTY4MTA2NDQ3Nn0.RD9PmUTAFb5L07CDmrhYo-MgBjS_vebkYkYmG0zGAxc"
            },
            body: JSON.stringify(note)
          });
        
        setNotes((prevNotes) => {
            return (notes = [...prevNotes, note]);
        })
    }

    async function editNote(title, content, tag) {
        const response = await fetch(`${host}api/notes/updatenote/64331b664b97d5ba24a05bef`, {
            method: "PUT",
            headers: {
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMzAyMWMyYTA4NTE4MDdmMjMxYTEwIn0sImlhdCI6MTY4MTA2NDQ3Nn0.RD9PmUTAFb5L07CDmrhYo-MgBjS_vebkYkYmG0zGAxc",
              "body": JSON.stringify(title, content, tag)
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }
          });

        setNotes(() => {

        })
    }

    async function deleteNote(id) {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMzAyMWMyYTA4NTE4MDdmMjMxYTEwIn0sImlhdCI6MTY4MTA2NDQ3Nn0.RD9PmUTAFb5L07CDmrhYo-MgBjS_vebkYkYmG0zGAxc"
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
