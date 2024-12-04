const mysql = require('mysql2');
require('dotenv').config();

// Tạo kết nối đến database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost', // Tên host
  port: process.env.DB_PORT || 3306,       // Cổng MySQL
  user: process.env.DB_USERNAME || 'root', // Tên người dùng
  password: process.env.DB_PASSWORD || 'admin', // Mật khẩu
  database: process.env.DB_DATABASE || 'social-media', // Tên cơ sở dữ liệu
});

// Kiểm tra kết nối
connection.connect((err) => {
  if (err) {
    console.error('Kết nối đến database thất bại:', err.message);
    process.exit(1);
  }
  console.log('Kết nối đến database thành công!');
});

module.exports = connection;
