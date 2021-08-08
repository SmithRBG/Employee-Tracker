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

app.listen(PORT, console.log(`Server Listening on ${PORT}`)); 


const start = () => {
    inquirer
    .prompt({
        name:'action',
        type:'list',
        message:'What would you like to do?',
        choices:['Add Employee', 'View Employees', 'Update Employee', 'Done'],
    })
    .then(function(answer) {
        switch (answer.action) {
            case 'Add Employee':
                addEmployee();
                break;
            case 'View Employees':
                viewEmployees();
                break;
            case 'Update Employee':
                updateEmployee();
                break;
            case 'Done':
              connection.end;
                break;
        }
    })
};

function addEmployee() {
    console.log("Add Employee")

    inquirer.prompt([
        {
          name: "first_name",
          type: "input",
          message: "Enter the first name of the new employee:",
        },
        {
          name: "last_name",
          type: "input",
          message: "Enter the first last of the new employee:",
        },
        {
          name: "role_id",
          type: "number",
          message: "Enter the job ID number:",
        },
        {
          name: "manager_id",
          type: "number",
          message: "Enter the manager ID number",
        }

      ])
      .then(function(answer) {
        /* console.log(answer) */
        connection.query("INSERT INTO Employee SET ?",
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id,
            manager_id: answer.manager_id
          },
          function(err) {
            if (err) throw err;
            console.log(`Employee: ${answer.first_name} ${answer.last_name} with Job ID ${answer.role_id} and Manager with an ID of ${answer.manager_id} has been added.`),
            start();
          },
        )});
};

    function viewEmployees() {  //need to update to view entire table
      console.log("Viewing Employees")
      connection.query("SELECT * FROM employee_tracker.employee",

      function(err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })};
    
function updateEmployee() {
  console.log("Updating Employees")
  connection.query("",

  function(err, res) {
    if(err) throw err;
    console.table(res);
    start();
  })};



      connection.connect((err) => {
        if(err) throw err;
        start();
    });









   
    







/* const viewEmployee = () => {
    console.log("Viewing employees\n");

    var query =
      `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee e
    LEFT JOIN role r
      ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    LEFT JOIN employee m
      ON m.id = e.manager_id`
  
    connection.query(query, function (err, res) {
      if (err) throw err;
  
      console.table(res);
      console.log("Employees viewed!\n");
  
      firstPrompt();
    });
    // console.log(query.sql);
  
} */

