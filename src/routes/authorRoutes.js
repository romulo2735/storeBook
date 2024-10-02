import express from "express";
import AuthorController from "../controllers/AuthorController.js";

const routerAuthor = express.Router();

routerAuthor.get("/authors", AuthorController.getAuthors);
routerAuthor.get("/authors/:id", AuthorController.getAuthorById);
routerAuthor.post("/authors", AuthorController.createAuthor);
routerAuthor.put("/authors/:id", AuthorController.updateAuthor);
routerAuthor.delete("/authors/:id", AuthorController.deleteAuthor);

export default routerAuthor;