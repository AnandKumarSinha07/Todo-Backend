const Todo=require("../models/todo")


exports.deleteTodos=async (req,res)=>{
   try {
    const findId=req.params.id;

    const deleteId=await Todo.findByIdAndDelete({_id:findId});
    
    res.status(200).json({
        success:true,
        response:deleteId,
        message:"Deleted the id successfully"
    })

   } catch (error) {
      console.log("Error in the deleted method of the controller",error);

      res.status(500).json({
        success:false,
        message:"server error not found id "
      })
   }
}