const express = require('express');
const router = express.Router();
const ReturnStatus = require('../models/ReturnStatus'); // Sequelize model for ReturnStatus
const IssueStatus = require('../models/IssueStatus'); // Sequelize model for IssueStatus

// Log a book return
router.post('/returns', async (req, res) => {
    try {
        const { Return_cust, Return_book_name, Return_date, Isbn_book2 } = req.body;

        // Check if all required fields are provided
        if (!Return_book_name || !Return_date) {
            return res.status(400).json({
                error: 'Missing required fields',
                details: 'Please provide Return_book_name and Return_date',
            });
        }

        // Validate if the book is actually issued
        const issuedBook = await IssueStatus.findOne({
            where: {
                Issued_cust: Return_cust,
                Issued_book_name: Return_book_name,
            },
        });

        if (!issuedBook) {
            return res.status(400).json({
                error: 'Book not found in issued list',
                details: `The book "${Return_book_name}" was not issued to the customer.`,
            });
        }

        // Create the return record
        const returnRecord = await ReturnStatus.create({
            Return_cust,
            Return_book_name,
            Return_date,
            Isbn_book2,
        });

        // Remove the book from the IssueStatus table
        await issuedBook.destroy();

        res.status(201).json({
            message: 'Return logged successfully, and book removed from issued list',
            returnRecord,
        });
    } catch (error) {
        console.error('Error logging return:', error);
        res.status(500).json({
            error: 'Failed to log return',
            details: error.message,
        });
    }
});

module.exports = router;
