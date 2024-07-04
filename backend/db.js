const config = require("./config.js");
const mysql = require("mysql2");
const Sequelize = require("sequelize");

module.exports = db = {};

const { host, port, user, password, database } = config.database;

const pool = mysql.createPool({ host, port, user, password });

pool.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

const sequelize = new Sequelize(database, user, password, { dialect: 'mysql',
    pool: {
        "max": 5,
        "min": 0,
        "acquire": 30000,
        "idle": 10000
    }
})

db.sequelize = sequelize;

db.Repo = require("./models/Repo.js");

sequelize.sync();