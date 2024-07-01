const { Sequelize, DataTypes, INTEGER } = require("sequelize");
const db = require('../db.js');

const sequelize = db.sequelize;

const Repo = sequelize.define("Repo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    starsCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    place: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },


})

module.exports = Repo;