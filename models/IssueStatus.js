const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./Customer'); // Import related model
const Book = require('./Book'); // Import related model

const IssueStatus = sequelize.define('IssueStatus', {
    Issue_Id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
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
});

module.exports = IssueStatus;
