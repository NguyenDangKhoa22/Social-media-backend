const sequelize = require('./connect/database');
const User = require('../models/user');

const initDatabase = async ()=>{
    try{
        await sequelize.sync({ force: false});
        console.log ('Database synchronized successfully.');
    }catch(error){
        console.log ('Failed to synchronize database:', error.message);
    }
}
module.exports = initDatabase;