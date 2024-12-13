const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute');
const initDatabase = require('./config/initDatabase');
const app = express();
const PORT = 4000;
// Middleware
app.use(express.json());

app.use(bodyParser.json());
app.use('/users', userRoutes);

(async () => {
    // Khởi tạo cơ sở dữ liệu trước khi chạy server
    await initDatabase();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})();
module.exports = app;