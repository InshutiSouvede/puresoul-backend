import { Router } from "express"
import { getAllUsers, getUserById, updateUser } from "../controllers/UserController.js"

const userRouter = Router()
userRouter.get('/',getAllUsers)
userRouter.get('/:id',getUserById)
userRouter.put('/:id',updateUser)

export default userRouter