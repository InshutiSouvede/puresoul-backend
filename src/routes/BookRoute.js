import { Router } from "express"
import { getAllBooks, getBookById, updateBook } from "../controllers/BookController.js"

const bookRouter = Router()
bookRouter.get('/',getAllBooks)
bookRouter.get('/:id',getBookById)
bookRouter.put('/:id',updateBook)

export default bookRouter