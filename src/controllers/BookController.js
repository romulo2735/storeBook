import Book from "../models/Book.js";

export default class BookController {
    static async getBooks(req, res) {
        try {
            const books = await Book.find({});
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async getBookById(req, res) {
        try {
            const books = await Book.findById(req.params.id);
            res.json(books);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async deleteBook(req, res) {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            res.json(book);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async updateBook(req, res) {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id, req.body);
            res.json(book);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async createBook(req, res) {
        try {
            const book = await Book.create(req.body);
            res.status(201).json({message: "Book created!", book});
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}