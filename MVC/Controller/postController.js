/** @format */

import { postModel } from "../Model/postModel.js";
// create post
export const createPostController = async (req, res) => {
  try {
    const { id, fromUser, title, description, hashtags } = req.body;
    const newPost = new postModel({
      id,
      fromUser,
      title,
      description,
      hashtags,
    });
    
    await newPost.save();
    res.status(200).json({
      success: true,
      newPost,
    });
  } catch (error) {
    
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};
// get one post
export const getUserPost = async (req, res) => {
  try {
    const { fromUser } = req.body;
    // check if post exists
    const posts = await postModel.find({ fromUser });
    if (!posts || posts.length == 0) {
      return res.status(404).send("no posts found");
    }
    res.status(200).send({
      status: "success",
      message: "post added successfully",
      posts,
    });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

// delete
export const postDelete = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await postModel.deleteMany({ id }); // Delete all posts with the given id

    if (result.deletedCount > 0) {
      return res.status(200).send({
        success: true,
        message: "Post deleted successfully",
      });
    } else {
      return res.status(404).send({
        status: "error",
        message: "Post not found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

// update

// export const postUpdateController = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const post = await postModel.findById(id);
//     if (post) {
//       post.name = req.body.name || post.name;
//       post.last_name = req.body.last_name || post.last_name;
//       post.email = req.body.email || post.email;
//       post.phone = req.body.phone || post.phone;

//       // Check if password is provided in the request body
//       if (req.body.password) {
//         post.password = req.body.password;
//       }

//       const updateUser = await post.save();
//       return res.status(200).send({
//         status: "success",
//         message: "User updated successfully",
//         updateUser,
//       });
//     } else {
//       res.status(404).send({
//         status: "error",
//         message: "User not found",
//       });
//     }
//   } catch (error) {
//     console.log(`Error in API: ${error}`);
//     res.status(500).send({
//       status: "error",
//       message: "Internal Server Error",
//     });
//   }
// };
