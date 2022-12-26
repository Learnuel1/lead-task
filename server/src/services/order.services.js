const dbConnect =require("../config/db.config")
exports.getOrders =async(details)=>{
    try {
        const collection= dbConnect.db.collection('order_items');
        const orders =await collection.find({seller_id:details.seller_id}).limit(details.limit).toArray();
      
        return orders;
    } catch (error) {
        return {"error":error}
    }
}

exports.getOrderById=async(seller_id,id)=>{
    try {
        const collection= dbConnect.db.collection('order_items');
        const orders =await collection.find({seller_id:details.seller_id,id})
        return orders;
    } catch (error) {
        return{"error":error};
    }
}