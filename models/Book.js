const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
    ISBN: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Book_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Rental_Price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    Status: {
        type: DataTypes.ENUM('Yes', 'No'),
        allowNull: false,
    },
    Author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Publisher: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Book;
