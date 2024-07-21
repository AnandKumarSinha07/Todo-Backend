const Todo = require('../models/todo');

// Define route handler
exports.createTodo = async (req, res) => {
  
  try {
    // Extract title and description from request body
    const { title, description } = req.body;
    // Create a new todo object
   
    const response = await Todo.create({ title, description });
    // Send a JSON response with success flag
      res.status(200).json({
      success: true,
      data: response,
      message: 'Entry created successfully',
    });
  }
  
  
  catch (error) {
    console.log('Error', error);
    res.status(500).json({
      success: false,
      data: 'Internal server error',
      message: 'Error',
    });
  }
  
};
