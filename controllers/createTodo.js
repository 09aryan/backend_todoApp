const Todo=require("../models/Todo");


//define route handler
exports.createTodo=async(req,res)=>{
    try{
        //extract title and description from request body
        const{title,description}=req.body;
        //create a new obj and insert into db
        const response=await Todo.create({title,description});
        //send a json response with a succees flag
        res.status(200).json({
            success:true,
            data:response,
            message:"entry created successfully",
        });

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message, 
        })

    }
}
