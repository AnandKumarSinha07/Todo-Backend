const express = require('express');
const router = express.Router();
const  {createTodo}  = require('../controller/createTodo');

// Define API routes
router.post('/createTodo', createTodo);

module.exports = router;
