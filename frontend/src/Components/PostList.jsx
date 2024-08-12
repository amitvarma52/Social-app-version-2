/** @format */

import React, { useEffect, useState } from "react";
import Post from "./Post";
import Loading from "./Loading";
import NoPost from "./NoPost";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { myDataActions, userActions } from "../Store/ReduxToolkit";
const PostList = () => {
  const data=useSelector(state=>state.myData)
  const [reload,setReload]=useState(false)
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
          dispatch(myDataActions.initial(data.posts));
        });
    } else {
      navigate("/login");
    }
  },[]);
  if (data.length === 0) {
    return (
      <>
        <NoPost />
      </>
    );
  }
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
            setReload={setReload} 
            reload={reload}
          />
        );
      })}
    </>
  );
};

export default PostList;
