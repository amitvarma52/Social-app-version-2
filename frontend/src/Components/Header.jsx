/** @format */

import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userActions } from "../Store/ReduxToolkit";

const Header = () => {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    if (localStorage.getItem("social-user")) {
      localStorage.removeItem("social-user");
      dispatch(userActions.delete());
      navigate("/login");
    }
  };
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>

            {!user ? (
              <div className="text-end">
                <Link className="btn btn-outline-light me-2" to={"/login"}>
                  Login
                </Link>
                <Link className="btn btn-warning" to={"/sign-up"}>
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="text-end">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
