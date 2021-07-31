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
        choices:['Add Employee', 'Update Employee', 'Delete Employee', 'View Table', 'Done'],
    })
    .then(function(answer) {
        switch (answer.action) {
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee':
                updateEmployee();
                break;
            case 'Delete Employee':
                deleteEmployee();
                break;
            case 'View Table':
                viewTable();
                break;
            case 'Done':
                break;
        }
    })
};

function addEmployee() {
    console.log("Add Employee")
    
    let query =
    `SELECT `
    connection.query(query, function (err, res) {
        if (err) throw err;

        const roleChoices = res.map(({id, title, salary}) => ({
            value: id, title: `${title}`, salary: `${salary}`
        }));
    })

};

function viewTable() {  //need to update to view entire table
    console.log("Viewing Departments")
    connection.query("SELECT * FROM department"),
   /*  connection.query("SELECT employee"), */
    function(err, res) {
      if (err) throw err;
      console.table(res);
      start();
    }
  };


connection.connect((err) => {
    if(err) throw err;
    start();
})


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

/* 
if(answer.action === 'Add Employee'){
    addEmployee();
} else if (answer.action === 'Upate Employee'){
    updateEmployee();
} else if (answer.action === 'Delete Employee'){
    deleteEmployee();
}
} else {
    done();
}
}); */