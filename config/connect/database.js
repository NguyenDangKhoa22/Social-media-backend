
require('dotenv').config();
const { Sequelize } = require('sequelize');

const dbConnection = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
  }
);
(async () => {
  try {
    await dbConnection.authenticate();
    console.log('Kết nối cơ sở dữ liệu thành công!');
  } catch (error) {
    console.error('Không thể kết nối cơ sở dữ liệu:', error);
  }
})();

module.exports = dbConnection;