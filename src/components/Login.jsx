import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeContext from '../context/themes/themeContext';

const Login = () => {
    let [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const tcontext = useContext(ThemeContext);
    const {style, changeTheme} = tcontext;

    useEffect(() => {
        if (localStorage.getItem('authToken') && localStorage.getItem('theme')) {
          changeTheme(localStorage.getItem('theme'));
        }
    })

    let navigate = useNavigate();

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

        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        });

        const json = await response.json();
        if (json.success) {
            localStorage.setItem('authToken', json.authToken)
            navigate("/home");
        }
        else {
            alert("login with correct credentials")
        }

    }

    return (
        <main className="form-signin login w-200 m-auto">
            <form onSubmit={handleSubmit} method="post">
            <i className="fa-solid fa-user fa-2xl"></i>
                <h1 className="h3 mb-3 fw-normal">Login to iNotebook</h1>
                <div className="form-floating">
                <input name="email" value={credentials.email} onChange={handleChange} style={style.textArea} type="email" className="form-control top" aria-describedby="emailHelp" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                <input name='password' value={credentials.password} onChange={handleChange} style={style.textArea} type="password" className="form-control bottom" />
                    <label htmlFor="floatingInput">Password</label>
                </div>


                <button className="w-200 btn btn-lg btn-primary" type="submit">Login</button>
                <p className="mt-5 mb-3 text-muted">&copy; Aboli Deshmukh</p>
            </form>
        </main>
    )
}

export default Login
