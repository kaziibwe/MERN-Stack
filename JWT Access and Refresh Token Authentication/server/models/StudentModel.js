// StudentModel.js
import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 255]  // Equivalent to Joi validation for length
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true   // Checks for a valid email format
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 255]  // Equivalent to Joi validation for length
        }
    }
}, {
    tableName: 'students',  // Optional: Specify table name explicitly
    timestamps: false       // Disable createdAt and updatedAt timestamps
});

export default Student;
