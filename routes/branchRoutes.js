const express = require('express');
const router = express.Router();
const Branch = require('../models/Branch'); // Sequelize model for Branch

// Add a new branch
router.post('/branches', async (req, res) => {
    try {
        const { Branch_Id, Branch_name, Branch_location } = req.body;

        // Validate required fields
        if (!Branch_Id || !Branch_name || !Branch_location) {
            return res.status(400).json({
                error: 'Missing required fields',
                details: 'Please provide Branch_Id, Branch_name, and Branch_location',
            });
        }

        // Create the branch record
        const branch = await Branch.create({
            Branch_Id,
            Branch_name,
            Branch_location,
        });

        res.status(201).json({
            message: 'Branch added successfully',
            branch,
        });
    } catch (error) {
        console.error('Error adding branch:', error);
        res.status(500).json({
            error: 'Failed to add branch',
            details: error.message,
        });
    }
});

// Fetch all branches
router.get('/branches', async (req, res) => {
    try {
        const branches = await Branch.findAll();
        res.status(200).json(branches);
    } catch (error) {
        console.error('Error fetching branches:', error);
        res.status(500).json({
            error: 'Failed to fetch branches',
            details: error.message,
        });
    }
});

module.exports = router;
