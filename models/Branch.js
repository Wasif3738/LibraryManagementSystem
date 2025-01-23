const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Branch = sequelize.define('Branch', {
    Branch_no: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    Manager_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Branch_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Contact_no: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Branch;
