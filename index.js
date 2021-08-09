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

    //updating employees??
    
function updateEmployee() {
  console.log("Updating Employees")
  connection.query("UPDATE Employee SET",
    {

    },
  function(err, res) {
    if(err) throw err;
    console.table(res);
    start();
  })};


  function updateEmployee() {
    if (err) throw err;
    var sql = "UPDATE Employee SET role_id = '' WHERE Manager_id = ''";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  };


      connection.connect((err) => {
        if(err) throw err;
        start();
    });


