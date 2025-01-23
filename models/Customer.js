const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customer = sequelize.define('Customer', {
    Customer_Id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    Customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Customer_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Reg_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Customer;
