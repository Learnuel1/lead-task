const { getOrders, deleteOrder, updateProduct } = require("../services/order.services");
const { APIError } = require("../utils/apiError")
const responseBuilder = require('../utils/responseBuilder.utils')
exports.orders = async (req, res, next) => {
    try {
        let limit = 20, offset;
        if (!req.seller_id)
            next(APIError.unauthenticated());
        const details = { seller_id: req.seller_id, limit: 20, offset: 0, }
        if (req.query.limit)
            limit = req.query.limit;
        if (req.query.offset)
            offset = req.query.offset;
        const orders = await getOrders(details)
        const data = [];
        if (orders.length > 0) {
            orders.forEach((cur) => {

                data.push(responseBuilder.buildProduct(cur))
            })
        } else {
            return res.status(404).json({ msg: "No order item found" })
        }
        const items = {
            data,
            total: orders.length,
            limit,
            offset,
        }
        const response = responseBuilder.commonResponse("Found", items, "data")
        res.status(200).json(items)
    } catch (error) {
        next(error)
    }
}
exports.deleteOrdersById = async (req, res, next) => {
    try {
        if (!req.seller_id)
            next(APIError.unauthenticated());
        if (!req.query.id)
            next(APIError.badRequest())
        const details = { seller_id: req.seller_id, order_id: req.query.id }
        const order = await deleteOrder(details)
        if (order.err)
            return next(APIError.customError(order.err, 404));
        res.status(200).json({ success: true, msg: "Order deleted successfully" })
    } catch (error) {
        next(error)
    }
}

exports.productUpdate = async (req, res, next) => {
    try {
        const { productId } = req.query;
        if (!req.seller_id)
            return next(APIError.unauthenticated());
        if (!productId)
            return next(APIError.badRequest("Product id is required"));
        const details = {};
        for (key in req.body) {
            details[key] = req.body[key];
        }
        details.product_id = productId;
        const update = await updateProduct(details)
        if (!update)
            return next(APIError.customError("Product not found", 404));
        if (update.error)
            return next(APIError.customError(update.error, 400));
        res.status(200).json({ success: true, msg: "Product updated successfully" });
    } catch (error) {
        next(error);
    }
}