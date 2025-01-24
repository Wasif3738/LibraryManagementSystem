const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./Customer'); // Import related model
const Book = require('./Book'); // Import related model
const { v4: uuidv4 } = require('uuid'); // Import UUID for auto-generation

const IssueStatus = sequelize.define('IssueStatus', {
    Issue_Id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => uuidv4(),//Automatically generate a unique ID
    },
    Issued_cust: {
        type: DataTypes.STRING,
        references: {
            model: Customer,
            key: 'Customer_Id',
        },
    },
    Issued_book_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Issue_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Isbn_book: {
        type: DataTypes.STRING,
        references: {
            model: Book,
            key: 'ISBN',
        },
    },
}, {
    timestamps: true, // Enable automatic handling of createdAt and updatedAt
}
);

module.exports = IssueStatus;
