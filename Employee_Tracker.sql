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
salary decimal(8),
department_id int
);

create table Employee (
id int not null auto_increment primary key,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id int,
Manager_id int
)
;
insert into Department ( name ) values ('sales'),( 'legal'),('Admin');
insert into Roles ( title ) values ('Manager'),( 'Intern'), ('Accountant'),('Pimp Master General');
insert into Employee ( first_name, last_name ) values ('Sam', 'Winchester'),( 'Michael', 'Jones'), ('Wendy', 'Williams'), ('Homer', 'Simpson');

select * from Employee