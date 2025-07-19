const express = require('express');
const HelloController = require('../controllers/HelloController');
const OrderController = require('../controllers/OrdersControllers');
const router = express.Router();

// this is my first get routing
router.get('/hello', HelloController.Hello)
router.post('/hello-post', HelloController.HelloPost)

// mongoose
router.post('/insertOrder', OrderController.InsertOrder);
router.get('/ReadOrder', OrderController.ReadOrder);
router.post('/updateOrder/:id', OrderController.updateOrder);
router.get('/removeOrder/:id', OrderController.removeOrder);

module.exports = router;