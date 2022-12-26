const buildProduct =(productObj)=>{
const {_id,__v1,...data} = productObj;
return data;
}

module.exports={
    buildProduct,
}