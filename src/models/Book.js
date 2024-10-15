import mongoose from "mongoose";
import {authorSchema} from "./Author.js";

const bookSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    author: authorSchema

}, {versionKey: false});


const Book = mongoose.model("books", bookSchema);
export default Book;