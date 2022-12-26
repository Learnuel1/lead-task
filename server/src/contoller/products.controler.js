const { APIError } = require("../utils/apiError")

exports.orders =async(req,res,next)=>{
    try {
        if(req.seller_id)
        next(APIError.unauthenticated());
        
    } catch (error) {
        next(error)
    }
}
exports.ordersById =async(req,res,next)=>{
    try {
        if(req.seller_id)
        next(APIError.unauthenticated());

    } catch (error) {
        next(error)
    }
}