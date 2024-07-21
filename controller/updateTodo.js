const Todo=require('../models/todo')

exports.updateTodos=async (req,res)=>{
    try{
        // to update somothing first of fall we have to find 
       const findId=req.params.id;

       const {title,description}=req.body

       const updateTodo=await Todo.findByIdAndUpdate(
        {_id:findId},
        {title,description,updatedAt: Date.now()},   
       )

       res.status(200).json({
         success:true,
         data:updateTodo,
         message:"Updated response successfully"
       })
    }

    catch(error){
         console.log(error)
         res.status(500).json({
            success:false,
            error:error.message,
            message:"server error "
         })
    }
}