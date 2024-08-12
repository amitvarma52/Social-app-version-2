/** @format */

import React, { useEffect, useState } from "react";
import Post from "./Post";
import NoPost from "./NoPost";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { myDataActions, userActions } from "../Store/ReduxToolkit";
const PostList = () => {
  const data = useSelector((state) => state.myData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("social-user"));
    if (user) {
      dispatch(userActions.initial(user));
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
          dispatch(myDataActions.initial(data.posts.reverse()));
        });
    } else {
      navigate("/login");
    }
  }, []);
  if (data.length === 0) {
    return (
      <>
        <NoPost />
      </>
    );
  } else {
    return (
      <>
        {data.map((element) => {
          return (
            <Post
              key={element.title}
              id={element.id}
              fromUser={element.fromUser}
              title={element.title}
              description={element.description}
              hashtags={element.hashtags}
              reactions={element.reactions}
              location={element.location}
            />
          );
        })}
      </>
    );
  }
}
  

export default PostList;
