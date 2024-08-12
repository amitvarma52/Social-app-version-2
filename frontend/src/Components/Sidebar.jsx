/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const user = useSelector((state) => state.user);

  const [post, setPost] = useState(true);
  const [allPosts, setAllPosts] = useState(false);
  const [create, setCreate] = useState(false);
  const handlePost = () => {
    setPost(true);
    setAllPosts(false);
    setCreate(false);
  };
  const handleCreate = () => {
    setPost(false);
    setAllPosts(false);
    setCreate(true);
  };
  const handleAllPosts = () => {
    setPost(false);
    setAllPosts(true);
    setCreate(false);
  };
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
        style={{
          width: "200px",
          height: "100vh",
          position: "sticky",
          top: "0",
        }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-2 center">Social app</span>
        </a>
        <hr />
        {user && (
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <Link
                to="/create-post"
                className={
                  create
                    ? "change nav-link text-white active"
                    : "change nav-link text-white "
                }
                onClick={handleCreate}
              >
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#speedometer2"></use>
                </svg>
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className={
                  post
                    ? "change nav-link text-white active"
                    : "change nav-link text-white "
                }
                onClick={handlePost}
              >
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#home"></use>
                </svg>
                My Posts
              </Link>
            </li>

            <li>
              <Link
                to="/all-posts"
                className={
                  allPosts
                    ? "change nav-link text-white active"
                    : "change nav-link text-white "
                }
                onClick={handleAllPosts}
              >
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#speedometer2"></use>
                </svg>
                all Posts
              </Link>
            </li>
          </ul>
        )}

        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {user && <h5 style={{ marginLeft: "20px" }}>{user.name}</h5>}
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
