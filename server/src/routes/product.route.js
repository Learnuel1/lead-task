const express =require('express');
const { orders, ordersById } = require('../contoller/products.controler');
const { userRequired } = require('../middleware/auth.middleware');
const { notFound, errorHandler } = require('../middleware/error.middleware');
const productRoute = express.Router();

productRoute.get('/',userRequired, orders);
productRoute.get('/:id',userRequired, ordersById);
productRoute.all("*",notFound);
productRoute.use(errorHandler);
module.exports={
    productRoute,
}