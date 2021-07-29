const express = require('express');
const path = require('path');
const sequelize = require('sequelize');
const table = require('console.table');
const mysql = require('mysql2');
const connection = require('./Config/connection');
//const inquirer = require('inquirer');

const app = express();

/* app.get('/', (req, res) => res.send('HELLO WORLD')); */

 const PORT = process.eventNames.PORT || 8080;

//riddle me this, what is this?
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* connection.syn().then(() => */
app.listen(PORT, console.log(`Server Listening on ${PORT}`)); 


const start = () => {
    inquirer
    .prompt({
        name:'',
        type:'',
        message:'',
        choices:[],
    })
    .then ((answer) => {
        if(){

        }
    })
}