const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Branch = sequelize.define('Branch', {
    Branch_Id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    Branch_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Branch_location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false, // Disable createdAt and updatedAt
});

module.exports = Branch;
