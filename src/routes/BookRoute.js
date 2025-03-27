import { Router } from "express"
import { createBook, getAllBooks, getBookById, updateBook } from "../controllers/BookController.js"

const bookRouter = Router()
bookRouter.get('/',getAllBooks)
bookRouter.get('/:id',getBookById)
bookRouter.put('/:id',updateBook)
bookRouter.post('/',createBook)

export default bookRouter