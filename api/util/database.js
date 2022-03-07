const { Sequelize } = require('sequelize');

const dotenv = require('dotenv');

dotenv.config({path:'../conig.env'});

const sequelize = new Sequelize({
    host:'localhost',
    username: 'postgres',
    password: 'root',
    port: 5432,
    database: 'toDo',
    dialect: 'postgres',
    logging: false
});

module.exports = {sequelize};