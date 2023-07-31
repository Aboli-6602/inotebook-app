// import React from 'react'

import { useContext } from "react";
import ThemeContext from "../context/themes/themeContext";

const About = () => {
  const host = "http://localhost:5000";

  const tcontext = useContext(ThemeContext);
  const {theme} = tcontext;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const response = await fetch(`${host}/newsletter`, {
      // mode: 'no-cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email })
    })
    console.log(response);
  }

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit} method="post">
        <i className="fa-solid fa-envelope-open-text fa-2xl"></i>
        <h1 className="h3 mb-3 fw-normal">Sign Up to My NewsLetter!</h1>
        <p>to get intresting tips and articles to increase your productivity</p>
        <div className="form-floating">
          <input type="text" name="firstName" className="form-control top" placeholder="First Name" />
          <label htmlFor="floatingInput" style={(theme === "black") && { color: "black" }}>First Name</label>
        </div>
        <div className="form-floating">
          <input type="text" name="lastName" className="form-control middle" placeholder="Last name" />
          <label htmlFor="floatingInput" style={(theme === "black") && { color: "black" }}>Last name</label>
        </div>
        <div className="form-floating">
          <input type="email" name="email" className="form-control bottom" placeholder="Email" />
          <label htmlFor="floatingInput" style={(theme === "black") && { color: "black" }}>Email address</label>
        </div>


        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Me Up</button>
        <p className="mt-5 mb-3 text-muted">&copy; Aboli Deshmukh</p>
      </form>
    </main>
  )
}

export default About
