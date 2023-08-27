import express from 'express'
import { userController } from '../controllers/user-controller.js'
const userRoutes=express.Router()
console.log("hello");

userRoutes.get('/profile/:username', userController.profile)
userRoutes.post('/login', userController.login);
userRoutes.post('/register', userController.register)
//userRoutes.put('/change password')
//userRoutes.delete('/remove-account')
export default userRoutes