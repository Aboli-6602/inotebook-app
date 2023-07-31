// import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HomePage from './components/HomePage';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/notes/noteState';
import ThemeState from './context/themes/themeState';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <NoteState>
        <ThemeState>

          <Router>
            <Navbar />
            <div className="container">
              <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/newsletter" element={<About />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </Router>
        </ThemeState>
      </NoteState>
    </>
  );
}

export default App;

// note gets added in frontend even if does not satisfy character length condition: checked
// frontend+backend validation after updating note ?: checked
// themes position in md and sm
// when refreshed outside home, theme goes back to white