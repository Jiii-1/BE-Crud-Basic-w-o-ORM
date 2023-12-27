import BookModel from "../models/bookModel.js"

export const getAllBooks = async(req, res) => {
    try {
        const books = await BookModel.getAllBooks()
        res.status(200).json(books)
    } catch (error) {
        console.error('Error getting list of books', error)
        res.status(500).json({message: 'Internal Server Error'})
    }
}

export const getBookById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const book = await BookModel.getBookById(id);
  
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }
  
      res.status(200).json(book);
    } catch (error) {
      console.error('Error getting book by ID:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const addBook = async (req, res) => {
    const { title, desc, cover, price } = req.body;
  
    try {
      await BookModel.addBook(title, desc, cover, price);
      res.status(201).json({ message: 'Book added successfully' });
    } catch (error) {
      console.error('Error adding book:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};


export const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, desc, cover, price } = req.body;
  
    try {
      const book = await BookModel.getBookById(id);
  
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }
  
      await BookModel.updateBook(id, title, desc, cover, price);
      res.status(200).json({ message: 'Book updated successfully' });
    } catch (error) {
      console.error('Error updating book:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deleteBook = async (req, res) => {
    const { id } = req.params;
  
    try {
      const book = await BookModel.getBookById(id);
  
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }
  
      await BookModel.deleteBook(id);
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
      console.error('Error deleting book:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};