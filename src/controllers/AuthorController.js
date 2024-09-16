import Author from "../models/Author";

export default class AuthorController {
    static async getAuthors(req, res) {
        try {
            const authors = await Author.find({});
            res.status().json(authors);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    static async getById(req, res) {
        try {
            const author = await Author.findById(req.params.id);
            res.json(author);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}