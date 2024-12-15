const User = require('../../models/user');
const bcrypt = require('bcrypt');

const registerUser = async ({username,email, password}) => {
    const hashedPasswod = await bcrypt.hash(password,10);

    const exitingUser = await User.findOne({
        where: {email}
    });
    if(exitingUser){
        throw new Error('Email đã được sử dụng');
    }

    const newUser = await User.create({
        username,
        email,
        password : hashedPasswod
    })

    return newUser
}
module.exports = {
    registerUser,
}