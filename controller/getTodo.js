const Todo = require("../models/todo");

exports.getTodo = async (req, res) => {
  try {
    //fetch all the todo items
    const todosFind = await Todo.find({});

    res.status(200).json({
      success: true,
      data: todosFind,
      message: "Entire data fetched successfully",
    });
  } catch (error) {
    console.log("Erros in the get method", error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "server error",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    //fetch todo data on the basis of id
    const id=req.params.id;

    const dataById = await Todo.findById({_id:id});

    //data for given id not found
    if(!dataById){
        return res.status(404).json({
            success:false,
            message:"No data found with this id "
        })
    }

    // data for given id found

    res.status(200).json({
        success:true,
        data:dataById,
        message:"Data found of particular id "
    })
   
  } catch (error) {

    console.log("Error in the get id controller",error)
    res.status(500).json({
        success:false,
        error:error.message,
        message:"Error not able to fetch data "
    })
  }
};
