const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const Branch = require('../models/Branch'); // Ensure Branch model is imported

// Fetch all employees
router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.findAll({
            include: [{ model: Branch, attributes: ['Branch_name', 'Branch_location'] }]
        });

        res.status(200).json(employees);
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({
            error: 'Failed to fetch employees',
            details: error.message,
        });
    }
});

// Add a new employee
router.post('/employees', async (req, res) => {
    try {
        const { Emp_id, Emp_name, Position, Salary, Branch_no } = req.body;

        if (!Emp_id || !Emp_name || !Position || !Salary || !Branch_no) {
            return res.status(400).json({
                error: 'Missing required fields',
                details: 'Please provide Emp_id, Emp_name, Position, Salary, and Branch_no',
            });
        }

        // Ensure branch exists
        const branchExists = await Branch.findOne({ where: { Branch_Id: Branch_no } });
        if (!branchExists) {
            return res.status(400).json({
                error: 'Invalid Branch_no',
                details: `Branch with ID ${Branch_no} does not exist.`,
            });
        }

        // Create employee
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
