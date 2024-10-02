import express from "express";
import BookController from "../controllers/BookController.js";

const routerBook = express.Router();

routerBook.get("/books", BookController.getBooks);
routerBook.get("/books/:id", BookController.getBookById);
routerBook.post("/books", BookController.createBook);
routerBook.put("/books/:id", BookController.updateBook);
routerBook.delete("/books/:id", BookController.deleteBook);

export default routerBook;