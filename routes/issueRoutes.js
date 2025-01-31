const express = require('express');
const router = express.Router();
const IssueStatus = require('../models/IssueStatus'); // Sequelize model for IssueStatus

// Log a book issue
router.post('/issues', async (req, res) => {
    try {
        const { Issued_cust, Issued_book_name, Issue_date, Isbn_book } = req.body;

        // Validate required fields
        if (!Issued_cust || !Issued_book_name || !Issue_date || !Isbn_book) {
            return res.status(400).json({
                error: 'Missing required fields',
                details: 'Please provide Issued_cust, Issued_book_name, Issue_date, and Isbn_book',
            });
        }

        // Ensure the book exists before adding to IssueStatus
        const existingBook = await IssueStatus.findOne({
            where: { Isbn_book },
        });

        if (!existingBook) {
            const issueRecord = await IssueStatus.create({
                Issued_cust,
                Issued_book_name,
                Issue_date,
                Isbn_book,
            });

            return res.status(201).json({
                message: 'Book issued successfully',
                issueRecord,
            });
        }

        res.status(400).json({
            error: 'Book already issued',
            details: `The book with ISBN ${Isbn_book} is already issued.`,
        });
    } catch (error) {
        console.error('Error issuing book:', error);
        res.status(500).json({
            error: 'Failed to issue book',
            details: error.message,
        });
    }
});

// **Fix: Fetch all issued books (GET request)**
router.get('/issues', async (req, res) => {
    try {
        const issues = await IssueStatus.findAll();
        res.status(200).json(issues);
    } catch (error) {
        console.error('Error fetching issued books:', error);
        res.status(500).json({
            error: 'Failed to fetch issued books',
            details: error.message,
        });
    }
});

module.exports = router;
