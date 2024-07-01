const dotenv = require("dotenv");

module.exports = {
    "database":{
        "host": "localhost",
        "port": 3306,
        "user": "root",
        "password": `${process.env.DB_PWD}`,
        "database": `${process.env.DB_NAME}`
    }
}