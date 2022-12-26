const { getSellerById } = require("../services/user.services");
const { APIError } = require("../utils/apiError");

exports.userRequired =async(req,res,next)=>{
    try {
        const {seller_id}=req.query;
        if(!seller_id)
        next(APIError.unauthenticated());
        const seller = await getSellerById(seller_id);
        if(!seller || seller.length===0)
        next(APIError.notFound("User does not exist"));
        if(seller.error)
        next(APIError.customError());
        req.seller_id=seller.seller_id;
        next();
    } catch (error) {
        next(error)
    }
}