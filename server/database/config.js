const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/ecommerceTop.sqlite",
  logging: false,
});

module.exports = sequelize;
