drop database if exists Employee_Tracker;

create database Employee_Tracker;

use Employee_Tracker;

create table Department (
id int unsigned auto_increment primary key,
name varchar(30) not null
);

create table Roles (
id int not null auto_increment primary key,
title varchar(30) not null,
department_id int
);

create table Employee (
id int not null auto_increment primary key,
First_Name varchar(30) not null,
last_Name varchar(30) not null,
role_id int,
Manager_id int
)
;
insert into Department ( name ) values ('sales'),( 'legal'),('Admin');
insert into Roles ( title ) values ('Manager'),( 'Intern'), ('Accountant'),('Pimp Master General');
insert into Employee ( First_Name, last_Name ) values ('Sam', 'Winchester'),( 'Michael', 'Jones'), ('Wendy', 'Williams'), ('Homer', 'Simpson');
