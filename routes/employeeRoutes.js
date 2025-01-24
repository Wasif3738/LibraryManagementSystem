const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee'); // Sequelize model for Employee

// Add a new employee
router.post('/employees', async (req, res) => {
    try {
        const { Emp_id, Emp_name, Position, Salary, Branch_no } = req.body;

        // Validate required fields
        if (!Emp_id || !Emp_name || !Position || !Salary || !Branch_no) {
            return res.status(400).json({
                error: 'Missing required fields',
                details: 'Please provide Emp_id, Emp_name, Position, Salary, and Branch_no',
            });
        }

        // Create the employee record
        const employee = await Employee.create({
            Emp_id,
            Emp_name,
            Position,
            Salary,
            Branch_no,
        });

        res.status(201).json({
            message: 'Employee added successfully',
            employee,
        });
    } catch (error) {
        console.error('Error adding employee:', error);
        res.status(500).json({
            error: 'Failed to add employee',
            details: error.message,
        });
    }
});

module.exports = router;
