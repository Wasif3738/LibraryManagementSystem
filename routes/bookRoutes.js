const express = require('express');
const router = express.Router();
const Book = require('../models/Book'); // Sequelize model for Books table

// Route: Add a new book
router.post('/books', async (req, res) => {
    try {
        // Log the incoming request body
        console.log('Request Body:', req.body);

        // Destructure the fields from the request body
        const { ISBN, Book_title, Category, Rental_Price, Status, Author, Publisher } = req.body;

        // Create a new book record in the database
        const book = await Book.create({
            ISBN,
            Book_title,
            Category,
            Rental_Price,
            Status,
            Author,
            Publisher,
        });

        // Log the successfully added book
        console.log('Book added successfully:', book);

        // Send a success response
        res.status(201).json({
            message: 'Book added successfully',
            book,
        });
    } catch (error) {
        // Log the error to the console
        console.error('Error adding book:', error);

        // Send a detailed error response
        res.status(500).json({
            error: 'Failed to add book',
            details: error.message, // Provide specific details for debugging
        });
    }
});

module.exports = router;
