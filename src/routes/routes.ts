import express from "express";
import * as booksController from "../controllers/books_controller";

export const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('Hello World!')
//   });
router.get("/books", booksController.getBooks);
router.get("/books/:bookId", booksController.getBook);
router.post("/books", booksController.saveBook);

// User Story 4 - Update Book By Id Solution
router.put("/books/:bookId", booksController.updateBook);

// Task delete book
router.delete('/books/:bookId', booksController.deleteBook);