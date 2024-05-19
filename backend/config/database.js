const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cristianmachadoDB', 'root', '', {
  host: 'localhost',
  dialect: "mysql",
});

module.exports = sequelize;
