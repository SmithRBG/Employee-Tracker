const mysql = require('mysql');

require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: process.env.DB_USER,
  
    // Be sure to update with your own MySQL password!
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });


module.exports = connection;