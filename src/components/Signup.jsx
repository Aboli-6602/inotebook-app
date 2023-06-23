import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    let [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const navigate = useNavigate();

    const handleChange = (e)=>{
        let {name, value} = e.target;
        setCredentials((prevCredentials)=>{
            return (credentials={
                ...prevCredentials,
                [name]: value
            })
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        let {username, email, password} = credentials;
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, email, password})
        })

        const json = await response.json();
        if(json.success){
            localStorage.setItem('authToken', json.authToken)
            navigate("/");
        }
        else{
            e.preventDefault();
            console.log(json.error)
        }
        console.log(json);
    }

  return (
    <div className='container my-3'>
      <h2>Create a new account</h2>
      <form className='my-3' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">User Name</label>
                    <input name="username" value={credentials.username} onChange={handleChange} type="text" className="form-control" minLength={3} required />
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input name="email" value={credentials.email} onChange={handleChange} type="email" className="form-control" aria-describedby="emailHelp" required />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input name='password' value={credentials.password} onChange={handleChange} type="password" className="form-control" minLength={5} required />
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input name='cpassword' value={credentials.cpassword} onChange={handleChange} type="password" className="form-control" required />
                </div>
                <button disabled={credentials.password !== credentials.cpassword} type="submit" className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default Signup
