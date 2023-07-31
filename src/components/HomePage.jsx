import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {

  return (
    <div className='homePage'>
      <div className="homeContent">
        <h1 className=''>Welcome to iNotebook</h1>
        <p>A source to save your personal notes online.</p>
        <Link type="button" className="btn btn-outline-primary btn-lg my-2" to="/login">Login</Link>
        <Link type="button" className="btn btn-outline-primary btn-lg mx-3 my-2" to="/signup">Signup</Link>
        <p>to make your own notes</p>
      </div>
      <img className='homeImg' src="https://images.unsplash.com/photo-1616593772450-6220bc809944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1791&q=80" alt="notebook" />
    </div>
  )
}

export default HomePage
