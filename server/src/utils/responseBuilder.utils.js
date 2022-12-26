const buildProduct =(productObj)=>{
const {_id,order_id,freight_value,...data} = productObj;
const product ={
    id: data.order_item_id,
    product_id: data.product_id,
    // product_category: data.products.product_category_name,
    price: data.price,
    date: data.shipping_limit_date

}
return product;
}

const buildUser =(userObj)=>{
    const {_id,seller_id,seller_zip_code_prefix,...data}=userObj;
    return data;
}
const commonResponse =(msg,data,field="data",others={},op=true)=>{
    const response ={
        success:op,
        msg,
        [field]:data,
        ...others
    }
 return  response;
}
module.exports={
    buildProduct,
    buildUser,
    commonResponse
}