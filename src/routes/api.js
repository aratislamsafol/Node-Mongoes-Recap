const express = require('express');
const HelloController = require('../controllers/HelloController');
const router = express.Router();

// this is my first get routing
router.get('/hello', HelloController.Hello)
router.post('/hello-post', HelloController.HelloPost)

module.exports = router;