const express = require("express");
const router = express.Router();
const { createTodo } = require("../controller/createTodo");
const { getTodo } = require("../controller/getTodo");
const { getTodoById } = require("../controller/getTodo");
const { updateTodos } = require("../controller/updateTodo");
const { deleteTodos } = require("../controller/deleteTodo");

// Define API routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodos/:id", updateTodos);
router.delete("/deleteTodos/:id", deleteTodos);

module.exports = router;
