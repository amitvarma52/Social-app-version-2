/** @format */

import mongoose from "mongoose";
const postSchema = mongoose.Schema(
  {
    id: {
      type: String,
      require: [true, "post id is require"],
    },
    fromUser: {
      type: String,
      require: [true, "user name is require"],
    },
    title: {
      type: String,
      require: [true, "title is require"],
    },
    description: {
      type: String,
      require: [true, "description is require"],
    },
    hashtags: {
      type: Array,
      require: [true, "hashtags are require"],
    },
  },
  { timeStamp: true },
  { id: false }
);
export const postModel = mongoose.model("post", postSchema);
