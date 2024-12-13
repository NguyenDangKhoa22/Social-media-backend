const userService = require('../services/userService');

const createUser = async (req,res) =>{
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    }
    catch (error){
        req.status(500).json ({error: error.message});
    }
}
const getUsers = async (req,res) =>{
    try{
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    }
    catch (error) {
        req.status(500).json({error: error.message});
    }
}
module.exports = {
    createUser, getUsers
}