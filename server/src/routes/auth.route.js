const express = require('express');
const { login } = require('../contoller/auth.controler');
const { notFound, errorHandler } = require('../middleware/error.middleware');
const authRoute = express.Router();

authRoute.post('/',login);
authRoute.all("*",notFound);
authRoute.use(errorHandler);
module.exports={
    authRoute,
}