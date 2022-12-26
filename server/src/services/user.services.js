const { MongoClient } = require("mongodb");
const dbconnect = require('../config/db.config');

 

exports.getUser =async(seller_id,seller_zip_code_prefix)=>{
    try{
  const collecton = dbconnect.db.collection('sellers');
  const user = await collecton.find({seller_id,seller_zip_code_prefix}).toArray();
  
      return user;
    }catch(error){
        return {"error":error};
    }
}
exports.getSellerById =async(seller_id)=>{
    try{
        const collecton = dbconnect.db.collection('sellers');
        const user = await collecton.find({seller_id}).toArray();
     return user
    }catch(error){
        return {"error":error};
    }
}

exports.update=async(useData)=>{
    try {
        
    } catch (error) {
        return {"error": error};
    }
}