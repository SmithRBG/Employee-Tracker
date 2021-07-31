const express = require('express');
const path = require('path');
const sequelize = require('sequelize');
const table = require('console.table');
const mysql = require('mysql2');
const connection = require('./Config/connection');
const inquirer = require('inquirer');

const app = express();

/* app.get('/', (req, res) => res.send('HELLO WORLD')); */

 const PORT = process.eventNames.PORT || 8080;

//riddle me this, what is this?
/* app.use(express.json());
app.use(express.urlencoded({extended: true})); */

app.listen(PORT, console.log(`Server Listening on ${PORT}`)); 


const start = () => {
    inquirer
    .prompt({
        name:'action',
        type:'list',
        message:'What would you like to do?',
        choices:['View Employees', 'View Roles', 'View Departments', ],
    })
    .then ((answer) => {
        if(answer.action === 'View Employees'){
            viewEmployee();
        } else if (answer.action === 'View Roles'){
            viewRoles();
        } else {
            viewDepartments();
        }
    });
};

const viewEmployee = () => {
    
}





connection.connect((err) => {
    if(err) throw err;
    start();
})