const express =require('express');
const { orders, ordersById, deleteOrdersById, productUpdate } = require('../contoller/products.controler');
const { userRequired } = require('../middleware/auth.middleware');
const { notFound, errorHandler } = require('../middleware/error.middleware');
 
const productRoute = express.Router();

productRoute.get('/',userRequired, orders);
productRoute.delete('/',userRequired, deleteOrdersById);
productRoute.put('/product',userRequired,productUpdate)

productRoute.all("*",notFound);
productRoute.use(errorHandler);
module.exports={
    productRoute,
}