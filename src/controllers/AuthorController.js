import {Author} from "../models/Author.js";

export default class AuthorController {
    static async getAuthors(req, res) {
        try {
            const authors = await Author.find({});
            res.status().json(authors);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    static async getAuthorById(req, res) {
        try {
            const author = await Author.findById(req.params.id);
            res.json(author);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    static async createAuthor(req, res) {
        try {
            const author = await Author.create(req.body);
            res.status(201).json({message: "Author: ", author});
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    static async updateAuthor(req, res) {
        try {
            const author = await Author.findByIdAndUpdate(req.params.id, req.body);
            res.json(author);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    static async deleteAuthor(req, res) {
        try {
            const author = await Author.findByIdAndDelete(req.params.id);
            res.json(author);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}