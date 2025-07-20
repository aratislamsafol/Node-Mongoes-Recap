const express = require('express');
const HelloController = require('../controllers/HelloController');
const OrderController = require('../controllers/OrdersControllers');
const JWTPractice = require('../controllers/JWTTokenPractice');
const TokenIssueController = require('../controllers/TokenIssueController');
const TokenVerifyMiddleware = require('../middleware/TokenVerifyMiddleware');

const router = express.Router();

// this is my first get routing
router.get('/hello', HelloController.Hello)
router.post('/hello-post', HelloController.HelloPost)

// mongoose with apply jwt auth
router.get('/tokenIssue', TokenIssueController.TokenIssue);
router.post('/insertOrder', TokenVerifyMiddleware, OrderController.InsertOrder);
router.get('/ReadOrder', TokenVerifyMiddleware, OrderController.ReadOrder);
router.post('/updateOrder/:id', TokenVerifyMiddleware, OrderController.updateOrder);
router.get('/removeOrder/:id', TokenVerifyMiddleware, OrderController.removeOrder);

// create jwt token for basic Practice Purpose
router.get('/CreateToken', JWTPractice.CreateToken);
router.get('/DecodeToken', JWTPractice.DecodeToken);

module.exports = router;