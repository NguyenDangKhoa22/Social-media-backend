const express = require('express');
const bodyParser = require('body-parser');
const initDatabase = require('./config/initDatabase');
// const authRoutes = require('./routes/register/auth.routes.register');
const app = express();
const PORT = 4000;
// Middleware
app.use(express.json());

app.use(bodyParser.json());
// app.use('/api/auth',authRoutes);

// (async () => {
//     // Khởi tạo cơ sở dữ liệu trước khi chạy server
//     await initDatabase();

//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//     });
// })();
module.exports = app;