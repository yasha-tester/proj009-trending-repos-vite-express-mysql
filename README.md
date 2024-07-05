# Trending Repos API and SPA

Used tech stack: Vite, React, Express, Mysql (with mysql2), Sequelize.

# the project is in progress...

<h3>How to install and set mysql on linux: </h3>

sudo apt update;

sudo apt install mysql-server

mysql --version

mysql 

ALTER USER 'root'@'localhost' IDENTIFIED BY 'yourNewPassword';

*for creating ".env" file see further steps*

<span style="color:orange">*this below is optional step, if doesnt work without it, it can be done after first try with everything else set* </span>

- CREATE DATABASE trendingRepos2;
SHOW DATABASES;
USE trendingRepos2;
CREATE TABLE Repos(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, name VARCHAR(255), repo_desc TEXT, starsCount INT NOT NULL, place INT NOT NULL);

<h3>How to run:</h3> 

<span style="color:orange">*this below is optional step, it described above but should be done in case if it doesnt work without it, it can be done after first try with everything else set*</span>

- manually create database called "trendingRepos" and a table "Repos" inside of it in mysql


create .env file in "/backend" folder and put there two lines with your mysql password "DB_PWD=[yourPassword]" and your database name "DB_NAME=[yourDatabase name]" (your database will be called trendingRepos if you follow previous step)

if created database not for root user, then change "user"'s value from "/backend/config.js" file, 

open proj folder,

open terminal in this project folder, then write

cd backend, 

npm install, 

node server.js, 

cd .., 

cd frontend, 

npm install, 

npm run dev, 

then open localhost:5173 in browser,

enjoy

# what will be added:

Promises for repos to fix messed up order when db is lagging a little;

also:
search bar,
timer indicator,
refactored GUI

and also most probably: 
CLI client