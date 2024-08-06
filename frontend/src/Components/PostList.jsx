/** @format */

import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { appContext } from "../Store/Store";
import Loading from "./Loading";
import NoPost from "./NoPost";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../Store/ReduxToolkit";
const PostList = () => {
  const { cardObj, getServerData } = useContext(appContext);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(() => {
    const user = localStorage.getItem("social-user");
    if (user) {
      dispatch(userActions.initial(JSON.parse(user)))
      navigate("/");
    } else {
      navigate('/login')
    }
  }, []);
  return (
    <>
      {cardObj.length === 0 && <NoPost />}
      {cardObj.map((element) => {
        return (
          <Post
            key={element.id}
            id={element.id}
            title={element.title}
            description={element.body}
            tags={element.tags}
          ></Post>
        );
      })}
    </>
  );
};

export default PostList;
