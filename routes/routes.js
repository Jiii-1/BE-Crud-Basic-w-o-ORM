import express, { Router } from 'express'
import { getAllBooks, addBook, getBookById, updateBook, deleteBook } from '../controllers/book.js'

const router = express.Router()

// Book Endpoint

router.get('/books', getAllBooks)
router.get('/book/:id', getBookById)
router.post('/book', addBook)
router.put('/book/:id', updateBook)
router.delete('book/:id', deleteBook)

router.get('/', (req, res) => {
    res.json('this is book API')
})


export default router