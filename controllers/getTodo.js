
 const Todo=require("../models/Todo");

 //define route handler

 exports.getTodo=async(req,res)=>{
    try{
      const todos=await Todo.find({});
      //response 
      res.status(200).json({
        success:true,
        data:todos,
      meassage:"Entire Todo Data is feched",
      })

    }
    catch(err){
console.error(err);
res.status(500).json({
    success:false,
    error:err.meassage,
  meassage:"Server Error",
})
    }   
 }
 exports.getTodoById=async(req,res)=>{
    try{
         //extract todo it on baiics of id
         const  id=req.params.id;
         const todo=await Todo.findById({_id:id});
         //data for given id not found
         if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found with given id",
            })
         }
         res.status(200).json({
            success:true,
            data:todo,
            message:"Todo ${id} data successfully fecthed",
         })
    }

    catch(err){
        console.error(err);
res.status(500).json({
    success:false,
    error:err.meassage,
  meassage:"Server Error",
})
     
    }
 }