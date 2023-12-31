import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeContext from '../context/themes/themeContext'

const Signup = () => {
    let [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const tcontext = useContext(ThemeContext);
    const {style, changeTheme} = tcontext;

    useEffect(() => {
        if (localStorage.getItem('authToken') && localStorage.getItem('theme')) {
          changeTheme(localStorage.getItem('theme'));
        }
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        let { name, value } = e.target;
        setCredentials((prevCredentials) => {
            return (credentials = {
                ...prevCredentials,
                [name]: value
            })
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let { username, email, password } = credentials;
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email, password })
        })

        const json = await response.json();
        if (json.success) {
            localStorage.setItem('authToken', json.authToken)
            navigate("/home");
        }
        else {
            e.preventDefault();
            console.log(json.error)
        }
        console.log(json);
    }

    return (
        <main className="form-signin signup w-200 m-auto">
            <form onSubmit={handleSubmit} method="post">
            <i className="fa-solid fa-user fa-2xl"></i>
                <h1 className="h3 mb-3 fw-normal">Create a new account</h1>
                <div className="form-floating">
                <input name="username" value={credentials.username} onChange={handleChange} style={style.textArea} type="text" className="form-control top" minLength={3} required />
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                <input name="email" value={credentials.email} onChange={handleChange} style={style.textArea} type="email" className="form-control middle" aria-describedby="emailHelp" required />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                <input name='password' value={credentials.password} onChange={handleChange} style={style.textArea} type="password" className="form-control middle" minLength={5} required />
                    <label htmlFor="floatingInput">Password</label>
                </div>
                <div className="form-floating">
                <input name='cpassword' value={credentials.cpassword} onChange={handleChange} style={style.textArea} type="password" className="form-control bottom" required />
                    <label htmlFor="floatingInput" >Confirm Password</label>
                </div>


                <button disabled={credentials.password !== credentials.cpassword} className="w-200 btn btn-lg btn-primary" type="submit">Signup</button>
                <p className="mt-5 mb-3 text-muted">&copy; Aboli Deshmukh</p>
            </form>
        </main>
    )
}

export default Signup
