/** @format */

import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "name is required"],
    },
    email: {
      type: String,
      require: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "password is required"],
    },
  },
  { timestamp: true }
); //for capturing record time
export const userModel = mongoose.model("users", userSchema);