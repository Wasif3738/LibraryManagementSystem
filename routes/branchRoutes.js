const express = require('express');
const router = express.Router();
const Branch = require('../models/Branch'); // Sequelize model for Branch

// ✅ Fetch all branches
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

// ✅ Fetch a single branch by ID
router.get('/branches/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const branch = await Branch.findByPk(id);

        if (!branch) {
            return res.status(404).json({ error: 'Branch not found' });
        }

        res.status(200).json(branch);
    } catch (error) {
        console.error('Error fetching branch:', error);
        res.status(500).json({
            error: 'Failed to fetch branch',
            details: error.message,
        });
    }
});

// ✅ Add a new branch
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

// ✅ Update a branch
router.put('/branches/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Branch_name, Branch_location } = req.body;

        const branch = await Branch.findByPk(id);
        if (!branch) {
            return res.status(404).json({ error: 'Branch not found' });
        }

        // Update branch data
        branch.Branch_name = Branch_name || branch.Branch_name;
        branch.Branch_location = Branch_location || branch.Branch_location;
        await branch.save();

        res.status(200).json({
            message: 'Branch updated successfully',
            branch,
        });
    } catch (error) {
        console.error('Error updating branch:', error);
        res.status(500).json({
            error: 'Failed to update branch',
            details: error.message,
        });
    }
});

// ✅ Delete a branch
router.delete('/branches/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const branch = await Branch.findByPk(id);

        if (!branch) {
            return res.status(404).json({ error: 'Branch not found' });
        }

        await branch.destroy();
        res.status(200).json({ message: 'Branch deleted successfully' });
    } catch (error) {
        console.error('Error deleting branch:', error);
        res.status(500).json({
            error: 'Failed to delete branch',
            details: error.message,
        });
    }
});

module.exports = router;
