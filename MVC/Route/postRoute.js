/** @format */

import express from "express";
import { createPostController, getAllPosts, getUserPost, likeUpdateController, postDelete } from "../Controller/postController.js";

const postRouter = express.Router();

// create
postRouter.post("/create", createPostController);
// get based on user
postRouter.post("/getByUser", getUserPost);
// all posts based on location
postRouter.post("/getAllPost",getAllPosts)
// delete
postRouter.delete("/delete",postDelete)
// like update
postRouter.put("/update-like", likeUpdateController);
export default postRouter;
