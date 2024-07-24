const Book = require('../../Model/BookService/book');

async function getAllBooks(req, res) {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve books' });
  }
}

async function createBook(req, res) {
  const newBook = new Book({ title: req.body.title, author: req.body.author });
  try {
    await newBook.save();
    res.json({ message: 'Book created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create book' });
  }
}

// Other controller methods for updating, deleting, etc.

module.exports = {
  getAllBooks,
  createBook
  // Other exported methods
};
