const { getOrders } = require("../services/order.services");
const { APIError } = require("../utils/apiError")
const responseBuilder =require('../utils/responseBuilder.utils')
exports.orders =async(req,res,next)=>{
    try {
        let limit=20,offset;
        if(!req.seller_id)
        next(APIError.unauthenticated());
        const details ={seller_id:req.seller_id,limit:20,offset:0,}
        if(req.query.limit)
        limit=req.query.limit;
        if(req.query.offset)
        offset=req.query.offset;
        const orders= await getOrders(details)
        const data=[];
        if(orders.length>0){
            orders.forEach((cur)=>{
                data.push(responseBuilder.buildProduct(cur))
            })
        }
        const items ={
            data,
            total:orders.length,
            limit,
            offset,
        }
        const response =  responseBuilder.commonResponse("Found",data,"data")
        res.status(200).json(items)
    } catch (error) {
        next(error)
    }
}
exports.ordersById =async(req,res,next)=>{
    try {
        if(!req.seller_id)
        next(APIError.unauthenticated());
        if(!req.query.id)
        next(APIError.badRequest())
        const details ={seller_id:req.seller_id}
       
        if(req.query.offset)
        offset=req.query.offset;
        const orders= await getOrders(details)
        const data=[];
        if(orders.length>0){
            orders.forEach((cur)=>{
                console.log(cur)
                data.push(responseBuilder.buildProduct(cur))
            })
        }
        const items ={
            data,
            total:orders.length,
            limit,
            offset,
        }
       
        res.status(200).json(items)
    } catch (error) {
        next(error)
    }
}