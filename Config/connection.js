const sequelize = require('sequelize');
const mysql = require('mysql2');
const dotenv = require('dotenv');

require('dotenv').config();

const connection = mysql.createConnection(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
    host: 'localhost',
    dialect: 'mysql2',
    port: 5000,
    
});

module.exports = connection;