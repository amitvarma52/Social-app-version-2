import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [hashtags, setHashTags] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/v1/social/post/create",{
      method:'post',
      body:JSON.stringify({
        id:user.name+title,
        fromUser:user.name,
        title:title,
        description:description,
        hashtags:hashtags.split(" ")
      })
      ,headers: {
        "Content-Type": "application/json",
      },
    });
    setTitle("");
    setDescription("");
    setHashTags("");
  };
  
  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Post Title</label>
          <input
            type="text"
            placeholder="How you're feeling today!"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Hashtags</label>
          <input
            placeholder="enter space after each hashtags"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={hashtags}
            onChange={(e) => {
              setHashTags(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">description</label>
          <textarea
            placeholder="describe more about it"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePost;
