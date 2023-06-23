import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    let [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    let navigate = useNavigate();

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

        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
          });

        const json = await response.json();
        if(json.success){
            localStorage.setItem('authToken', json.authToken)
            navigate("/");
        }
        else{
            alert("login with correct credentials")
        }
        
    }

    return (
        <div className='container my-3'>
        <h2>Login to iNotebook</h2>
            <form className='my-4' onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input name="email" value={credentials.email} onChange={handleChange} type="email" className="form-control" aria-describedby="emailHelp" />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input name='password' value={credentials.password} onChange={handleChange} type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
