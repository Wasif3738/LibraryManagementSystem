const express = require('express');
const router = express.Router();
const Book = require('../models/Book'); // Sequelize model for Books table

// Route: Add a new book
router.post('/books', async (req, res) => {
    try {
        console.log('Request Body:', req.body);

        const { ISBN, Book_title, Category, Rental_Price, Status, Author, Publisher } = req.body;

        const book = await Book.create({
            ISBN,
            Book_title,
            Category,
            Rental_Price,
            Status,
            Author,
            Publisher,
        });

        console.log('Book added successfully:', book);

        res.status(201).json({
            message: 'Book added successfully',
            book,
        });
    } catch (error) {
        console.error('Error adding book:', error);

        res.status(500).json({
            error: 'Failed to add book',
            details: error.message,
        });
    }
});

// Route: Get all books
router.get('/books', async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({
            error: 'Failed to fetch books',
            details: error.message,
        });
    }
});

// Route: Get a specific book by ISBN
router.get('/books/:ISBN', async (req, res) => {
    try {
        const { ISBN } = req.params;
        const book = await Book.findOne({ where: { ISBN } });

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        res.status(200).json(book);
    } catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).json({
            error: 'Failed to fetch book',
            details: error.message,
        });
    }
});

// Route: Update a book's details
router.put('/books/:ISBN', async (req, res) => {
    try {
        const { ISBN } = req.params;
        const { Book_title, Category, Rental_Price, Status, Author, Publisher } = req.body;

        const book = await Book.findOne({ where: { ISBN } });

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        // Update book details
        await book.update({
            Book_title,
            Category,
            Rental_Price,
            Status,
            Author,
            Publisher,
        });

        res.status(200).json({
            message: 'Book updated successfully',
            book,
        });
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({
            error: 'Failed to update book',
            details: error.message,
        });
    }
});

// Route: Delete a book
router.delete('/books/:ISBN', async (req, res) => {
    try {
        const { ISBN } = req.params;

        const book = await Book.findOne({ where: { ISBN } });

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        await book.destroy();

        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({
            error: 'Failed to delete book',
            details: error.message,
        });
    }
});

module.exports = router;
