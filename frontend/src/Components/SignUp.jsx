/** @format */

import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const name=useRef()
  const email=useRef()
  const password=useRef()
  const navigate=useNavigate()
  const handleSignUp=(e)=>{
    e.preventDefault()
    try {
    fetch("http://localhost:8080/api/v1/social/user/register", {
      method: "post",
      body: JSON.stringify({
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        name.current.value=""
        email.current.value = "";
        password.current.value = "";
        navigate('/login')
      });
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className="form-div">
      <div className="main">
        <p className="sign" align="center">
          Sign up
        </p>
        <form className="form1" onSubmit={handleSignUp}>
          <input
            className="un "
            type="text"
            align="left"
            placeholder="Username"
            ref={name}
            onChange={(e) => (name.current.value = e.target.value)}
          />
          <input
            className="un "
            type="text"
            align="left"
            placeholder="email"
            ref={email}
            onChange={(e) => (email.current.value = e.target.value)}
          />
          <input
            className="pass"
            type="password"
            placeholder="Password"
            ref={password}
            onChange={(e) => (password.current.value = e.target.value)}
          />
          <button className="submit" align="center">
            Sign in
          </button>
          <p className="link" align="center">
            <Link to="/login">already registerd? login?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
