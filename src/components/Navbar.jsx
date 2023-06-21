import React from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let Navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    Navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about" ? "active" : ""}`} to="/about">About</Link>
        </li>
        
      </ul>
      {localStorage.getItem('authToken') ? <button className="btn btn-outline-secondary mx-1" type="submit" onClick={handleLogout}>Logout</button> :
      <form className="d-flex">
      <Link type="button" className={`btn btn-outline-secondary mx-1 ${location.pathname==="/login" ? "active" : ""}`} to="/login">Login</Link>
      <Link type="button" className={`btn btn-outline-secondary mx-1 ${location.pathname==="/signup" ? "active" : ""}`} to="/signup">Signup</Link>
      </form>}
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
