import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1 className='my-4'>Welcome to iNotebook</h1>
      <p>A source to save your personal notes online.</p>
      <Link type="button" className="btn btn-outline-primary btn-lg mx-1" to="/login">Login</Link>
      <Link type="button" className="btn btn-outline-primary btn-lg mx-1" to="/signup">Signup</Link>
      <p>to make your own notes</p>
    </div>
  )
}

export default HomePage
