import React, { useState, useContext} from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom"
import NoteContext from '../context/notes/noteContext'
import ThemeContext from '../context/themes/themeContext';


const Navbar = () => {
  let location = useLocation();
  let Navigate = useNavigate();
  let [searchTag, setSearchTag] = useState("");
  const context = useContext(NoteContext);
  const {notes, setNotes} = context;
  const allNotes = [];

  const tContext = useContext(ThemeContext);
  const {theme, style, changeTheme} = tContext;

  for(let i=0; i<notes.length; i++){
    allNotes[i] = notes[i];
  }

  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    changeTheme("white")
    Navigate("/login");
  }

  const handleChange = (e)=>{
    setSearchTag(e.target.value);
    
  }

  const handleSearch = (e)=>{
    e.preventDefault();
    // setNotes(allNotes); // if another search is made after first search results are being displayed
    // console.log(notes);
    if(searchTag !== ""){
      setNotes(() => {
          return notes.filter((note) => {
              return (note.tag === searchTag);
          })
      })
    }
    
  }

  return (
    <nav className={(theme === "black") ? "navbar navbar-expand-lg navbar-dark" : "navbar navbar-expand-lg navbar-light"}>
    
    <div className="container-fluid" >
    <Link className="navbar-brand" to="/">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        {localStorage.getItem('authToken') && <Link className={`nav-link ${location.pathname==="/home" ? "active" : ""}`} aria-current="page" to="/home">Home</Link>}
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/newsletter" ? "active" : ""}`} to="/newsletter">Newsletter</Link>
        </li>        
      </ul>
      
      {localStorage.getItem('authToken') ? <button className="btn btn-outline-secondary mx-3" type="submit" onClick={handleLogout}>Logout</button> :
      <form className="d-flex">
      <Link type="button" className={`btn btn-outline-secondary mx-1 ${location.pathname==="/login" ? "active" : ""}`} to="/login">Login</Link>
      <Link type="button" className={`btn btn-outline-secondary mx-1 ${location.pathname==="/signup" ? "active" : ""}`} to="/signup">Signup</Link>
      </form>}
      {(location.pathname==="/home") && <form onSubmit={handleSearch} className="d-flex" role="search">
        <input name='searchTag' value={searchTag} onChange={handleChange} style={style.textArea} className="form-control me-2" type="search" placeholder="Search by Tag" aria-label="Search" />
        <button className="btn btn-outline-secondary" type="submit">Search</button>
      </form>}
    </div>
  </div>
</nav>
  )
}

export default Navbar