const User = require('../models/user');

const createUser = async (data) => {
    try{
        const user = await User.create(data);
        return user;
    }catch (error){
        throw new Error(error.message);
    }
}
const getAllUsers = async () => {
    try{
        const user = await User.findAll();
        return user;
    }
    catch (error){
        throw new Error(error.message);
    }
}
module.exports = {createUser,getAllUsers};