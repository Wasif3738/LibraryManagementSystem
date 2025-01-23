const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer'); // Sequelize model for the Customer table

// Add a new customer
router.post('/customers', async (req, res) => {
    try {
        const { Customer_Id, Customer_name, Customer_address, Reg_date } = req.body;

        // Input validation
        if (!Customer_Id || !Customer_name || !Customer_address || !Reg_date) {
            return res.status(400).json({
                error: 'All fields are required',
            });
        }

        // Check if the customer already exists
        const existingCustomer = await Customer.findOne({ where: { Customer_Id } });
        if (existingCustomer) {
            return res.status(409).json({
                error: 'A customer with this ID already exists',
            });
        }

        // Create a new customer
        const customer = await Customer.create({
            Customer_Id,
            Customer_name,
            Customer_address,
            Reg_date,
        });

        res.status(201).json({
            message: 'Customer added successfully',
            customer,
        });
    } catch (error) {
        console.error('Error adding customer:', error);
        res.status(500).json({
            error: 'Failed to add customer',
            details: error.message,
        });
    }
});

// Get all customers
router.get('/customers', async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json(customers);
    } catch (error) {
        console.error('Error retrieving customers:', error);
        res.status(500).json({
            error: 'Failed to retrieve customers',
            details: error.message,
        });
    }
});

// Get a customer by ID
router.get('/customers/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const customer = await Customer.findOne({ where: { Customer_Id: id } });
        if (!customer) {
            return res.status(404).json({
                error: 'Customer not found',
            });
        }

        res.status(200).json(customer);
    } catch (error) {
        console.error('Error retrieving customer:', error);
        res.status(500).json({
            error: 'Failed to retrieve customer',
            details: error.message,
        });
    }
});

// Update a customer
router.put('/customers/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Customer_name, Customer_address, Reg_date } = req.body;

        const customer = await Customer.findOne({ where: { Customer_Id: id } });
        if (!customer) {
            return res.status(404).json({
                error: 'Customer not found',
            });
        }

        // Update the customer details
        customer.Customer_name = Customer_name || customer.Customer_name;
        customer.Customer_address = Customer_address || customer.Customer_address;
        customer.Reg_date = Reg_date || customer.Reg_date;

        await customer.save();

        res.status(200).json({
            message: 'Customer updated successfully',
            customer,
        });
    } catch (error) {
        console.error('Error updating customer:', error);
        res.status(500).json({
            error: 'Failed to update customer',
            details: error.message,
        });
    }
});

// Delete a customer
router.delete('/customers/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const customer = await Customer.findOne({ where: { Customer_Id: id } });
        if (!customer) {
            return res.status(404).json({
                error: 'Customer not found',
            });
        }

        await customer.destroy();

        res.status(200).json({
            message: 'Customer deleted successfully',
        });
    } catch (error) {
        console.error('Error deleting customer:', error);
        res.status(500).json({
            error: 'Failed to delete customer',
            details: error.message,
        });
    }
});

module.exports = router;
