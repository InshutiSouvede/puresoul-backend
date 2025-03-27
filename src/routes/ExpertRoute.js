import { Router } from "express"
import { getAllExperts, getExpertById, updateExpert } from "../controllers/ExpertController.js"

const expertRouter = Router()
expertRouter.get('/',getAllExperts)
expertRouter.get('/:id',getExpertById)
expertRouter.put('/:id',updateExpert)

export default expertRouter