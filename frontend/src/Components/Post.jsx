/** @format */

import React, { useRef } from "react";
import { MdDelete } from "react-icons/md";
import { myDataActions } from "../Store/ReduxToolkit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Post = ({
  id,
  fromUser,
  title,
  description,
  hashtags,
  location,
  reactions,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleDelete = (e) => {
    fetch("http://localhost:8080/api/v1/social/post/delete", {
      method: "delete",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      fetch("http://localhost:8080/api/v1/social/post/getByUser", {
        method: "post",
        body: JSON.stringify({
          fromUser: user.name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          dispatch(myDataActions.initial(data.posts));
          navigate("/");
        });
    });
  };
  const deleteItem = useRef();
  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <span
            onClick={handleDelete}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-btn"
          >
            <MdDelete size={20} />
          </span>
          <h5 className="card-title" ref={deleteItem}>
            🗨️  {title}
          </h5>
          <p className="card-text">📃 {description}</p>
          <p className="card-text">📍 {location}</p>

          {hashtags.map((element) => (
            <span
              key={element}
              className="badge rounded-pill text-bg-warning hastags"
            >
              {`#${element}`}
            </span>
          ))}
          <div className="alert alert-info reactions" role="alert">
            This post has been reacted by {reactions.length} people
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
