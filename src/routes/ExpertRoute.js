import { Router } from "express"
import { createExpert, getAllExperts, getExpertById, updateExpert } from "../controllers/ExpertController.js"

const expertRouter = Router()
expertRouter.get('/',getAllExperts)
expertRouter.get('/:id',getExpertById)
expertRouter.put('/:id',updateExpert)
expertRouter.post('/',createExpert)

export default expertRouter