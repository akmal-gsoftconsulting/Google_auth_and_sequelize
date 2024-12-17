const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequalize-pg', 'postgres', 'root', {
  host: 'localhost', 
  dialect: 'postgres',
  logging: false, 
});

module.exports = sequelize