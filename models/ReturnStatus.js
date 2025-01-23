const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./Customer'); // Import related model
const Book = require('./Book'); // Import related model

const ReturnStatus = sequelize.define('ReturnStatus', {
    Return_Id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
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
});

module.exports = ReturnStatus;
