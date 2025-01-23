const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Employee = sequelize.define('Employee', {
    Emp_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    Emp_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Salary: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    Branch_no: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Employee;
