// db.js
import { Sequelize } from 'sequelize';

// Initialize Sequelize with MySQL connection
const sequelize = new Sequelize('school', 'alfred', 'Ka075.', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;
