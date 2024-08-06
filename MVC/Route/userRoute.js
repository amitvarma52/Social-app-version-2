import express from 'express'
import { loginController, registerController } from '../Controller/userController.js'
const userRouter =express.Router()

// login
userRouter.post("/login",loginController)
//register
userRouter.post("/register",registerController)
export default userRouter