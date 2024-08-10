/** @format */

import express from "express";
import { createPostController, getUserPost, postDelete } from "../Controller/postController.js";

const postRouter = express.Router();

// create
postRouter.post("/create", createPostController);
// get based on user
postRouter.post("/getByUser", getUserPost);
// delete
postRouter.delete("/delete",postDelete)
export default postRouter;
