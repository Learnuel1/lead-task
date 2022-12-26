const { getUser } = require("../services/user.services");
const { APIError } = require("../utils/apiError");

exports.login=async(req,res,next)=>{
    try {

        const {username,password} =req.body;
        if(!username)
        next(APIError.badRequest('username  is required'));
        if(!password)
        next(APIError.badRequest('password is required'));
        const user =await getUser(username,password);
        console.log(user)
        if(!user || user.length ===0)
        next(APIError.notFound("user does not exist"))
        if(user.error )
       return next(APIError.customError());

        res.status(200).json({msg:"Login successful",user});
    } catch (error) {
        next(error)
    }
}