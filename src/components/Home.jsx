import AddNote from "./AddNote.jsx"
import Notes from "./Notes.jsx"

const Home = () => {
  

  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
          <AddNote /> 
      </div>
        
      <Notes />

    </div>
  )
}

export default Home
