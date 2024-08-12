/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LikePost from "./LikePost";
import { allDataActions } from "../Store/ReduxToolkit";
import NoPost from "./NoPost";

const AllPosts = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  const data = useSelector((state) => state.allData);
  const allData = () => {
    if (user) {
      fetch("http://localhost:8080/api/v1/social/post/getAllPost", {
        method: "post",
        body: JSON.stringify({
          location: user.location,
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
          dispatch(allDataActions.initial(data.posts.reverse()));
        });
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    allData()
  }, []);
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
          <LikePost
            key={element.title}
            id={element.id}
            fromUser={element.fromUser}
            title={element.title}
            description={element.description}
            hashtags={element.hashtags}
            reactions={element.reactions}
            location={element.location}
            allData={allData}
          />
        );
      })}
    </>
  );
};

export default AllPosts;
