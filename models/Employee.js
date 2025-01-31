const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Branch = require('./Branch'); // Import Branch model

const Employee = sequelize.define(
    'Employee',
    {
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
            references: {
                model: Branch,
                key: 'Branch_Id',
            },
        },
    },
    {
        timestamps: true,
    }
);

// Define association
Employee.belongsTo(Branch, { foreignKey: 'Branch_no' });

module.exports = Employee;
