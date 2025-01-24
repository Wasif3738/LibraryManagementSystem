const express = require('express');
const router = express.Router();
const ReturnStatus = require('../models/ReturnStatus'); // Sequelize model for ReturnStatus

// Log a book return
router.post('/returns', async (req, res) => {
    try {
        const { Return_Id, Return_cust, Return_book_name, Return_date, Isbn_book2 } = req.body;

        //check if all required fields are provided
        if (!Return_Id || !Return_book_name || !Return_date) {
            return res.status(400).json({
                error: 'Missing required fields',
                details: 'Please provide Return_Id, Return_book_name, and Return_date',
            });
        }

        // Create the return record
        const returnRecord = await ReturnStatus.create({
            Return_Id,
            Return_cust,
            Return_book_name,
            Return_date,
            Isbn_book2,
        });

        res.status(201).json({
            message: 'Return logged successfully',
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

// Fetch all return records
router.get('/returns', async (req, res) => {
    try {
        const returns = await ReturnStatus.findAll();
        res.status(200).json(returns);
    } catch (error) {
        console.error('Error fetching returns:', error);
        res.status(500).json({
            error: 'Failed to fetch return records',
            details: error.message,
        });
    }
});

// Fetch return records for a specific customer
router.get('/returns/customer/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const returns = await ReturnStatus.findAll({ where: { Return_cust: id } });

        if (returns.length === 0) {
            return res.status(404).json({ error: 'No return records found for this customer' });
        }

        res.status(200).json(returns);
    } catch (error) {
        console.error('Error fetching customer returns:', error);
        res.status(500).json({
            error: 'Failed to fetch customer return records',
            details: error.message,
        });
    }
});

module.exports = router;
