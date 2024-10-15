# Books Store API

This is a simple API to manage books and authors. It has the following endpoints:

### Books:
- **GET /books**: Returns a list of all books.
- **GET /books/search?publisher=<>**: Returns a list of books by publisher.
- **GET /books/:id**: Returns a specific book by its ID.
- **POST /books**: Creates a new book.
- **PUT /books/:id**: Updates a specific book by its ID.
- **DELETE /books/:id**: Deletes a specific book by its ID.

### Authors:

- **GET /authors**: Returns a list of all authors.
- **GET /authors/:id**: Returns a specific author by its ID.
- **POST /authors**: Creates a new author.
- **PUT /authors/:id**: Updates a specific author by its ID.
- **DELETE /authors/:id**: Deletes a specific author by its ID.

# Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm start`

# Usage

You can use the API with any HTTP client. The API uses JSON for data exchange.

Example using `curl`: