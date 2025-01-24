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

        // Create the issue record
        const issueRecord = await IssueStatus.create({
            Issued_cust,
            Issued_book_name,
            Issue_date,
            Isbn_book,
        });

        res.status(201).json({
            message: 'Book issued successfully',
            issueRecord,
        });
    } catch (error) {
        console.error('Error issuing book:', error);
        res.status(500).json({
            error: 'Failed to issue book',
            details: error.message,
        });
    }
});

module.exports = router;
