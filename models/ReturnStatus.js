const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { v4: uuidv4 } = require('uuid'); // Import UUID library
const Customer = require('./Customer'); // Import related model
const Book = require('./Book'); // Import related model

const ReturnStatus = sequelize.define(
    'ReturnStatus',
    {
        Return_Id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            defaultValue: () => uuidv4(), // Automatically generate a unique ID
        },
        Return_cust: {
            type: DataTypes.STRING,
            references: {
                model: Customer,
                key: 'Customer_Id',
            },
        },
        Return_book_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Return_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Isbn_book2: {
            type: DataTypes.STRING,
            references: {
                model: Book,
                key: 'ISBN',
            },
        },
    },
    {
        timestamps: true, // Enable automatic handling of createdAt and updatedAt
        createdAt: 'createdAt', // Default Sequelize behavior
        updatedAt: 'updatedAt', // Default Sequelize behavior
    }
);

module.exports = ReturnStatus;
