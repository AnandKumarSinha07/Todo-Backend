const express = require("express");
const router = express.Router();
const { createTodo } = require("../controller/createTodo");
const { getTodo } = require("../controller/getTodo");
const { getTodoById } = require("../controller/getTodo");

// Define API routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);

module.exports = router;
