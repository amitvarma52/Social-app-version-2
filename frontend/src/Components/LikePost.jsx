import React from 'react'
import { FcLike } from "react-icons/fc";
import {  useSelector } from 'react-redux';
const LikePost = ({
  id,
  fromUser,
  title,
  description,
  hashtags,
  location,
  reactions,
  allData
}) => {
  const user=useSelector(state=>state.user)
  const handleLike = () => {
    fetch("http://localhost:8080/api/v1/social/post/update-like", {
      method: "put",
      body: JSON.stringify({
        id: id,
        name: user.name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(()=>{
      allData()
    })
  };
  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <span
            onClick={handleLike}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info delete-btn"
          >
            <FcLike size={20} />
          </span>
          <h5 className="card-title" >
            👤{fromUser} - {title} 
          </h5>
          <p className="card-text">🧾{description}</p>
          <p className="card-text">📍{location}</p>
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

export default LikePost