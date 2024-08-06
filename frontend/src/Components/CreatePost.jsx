import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../Store/Store";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const {setShow} = useOutletContext()
  const { handleAddPost } = useContext(appContext);
  const [title, setTitle] = useState("");
  const [hashtags, setHashTags] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddPost(title, description, hashtags.split(" "));
    setTitle("");
    setDescription("");
    setHashTags("");
    navigate("/");
    setShow(false)
  };
  const user=useSelector(state=>state.user)
  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  })
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
