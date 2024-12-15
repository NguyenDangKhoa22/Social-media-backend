const { registerUser } = require('../../services/register/auth.service.register');
const register = async (req,res)=>{
    const { username, email, password} = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Thiếu thông tin bắt buộc'});
    }
    
    try{
        const user = await registerUser({username,email,password});
        return res.status(201).json({
            message: 'Đăng kí thành công!',
            user: { id: user.id, username: user.email, email: user.email},
        });
    }catch(error){
        return res.error(500).json({error: error.message});
    }
}
module.exports = {
    register,
};