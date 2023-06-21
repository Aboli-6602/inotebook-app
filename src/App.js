// import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/notes/noteState';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <NoteState>
        
          <Router>
            <Navbar />
            <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
            </div>
          </Router>
        
      </NoteState>
    </>
  );
}

export default App;

// note gets added in frontend even if does not satisfy character length condition
// frontend+backend validation after updating note ?