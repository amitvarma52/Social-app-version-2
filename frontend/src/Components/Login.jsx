/** @format */

import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userActions } from "../Store/ReduxToolkit";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const dispatch=useDispatch()
  useEffect(() => {
   const user = localStorage.getItem("social-user"); 
    if (user) {
      navigate("/");
    }
  }, []);
  const handleLogin = (e) => {
    e.preventDefault()
    try {
      fetch("http://localhost:8080/api/v1/social/user/login", {
        method: "post",
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(userActions.initial(data.user));
          console.log(data.user)
          localStorage.setItem("social-user",JSON.stringify(data.user));
          email.current.value = "";
          password.current.value = "";
          navigate("/");
        });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="form-div">
      <div className="main">
        <p className="sign" align="center">
          Log In
        </p>
        <form className="form1" onSubmit={handleLogin}>
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
            Log in
          </button>
          <p className="link" align="center">
            <Link to="/sign-up">not registerd yet? click to register?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
