const mongoose=require("mongoose");
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(() => {
        console.log('db connection successfull');
    }).catch((err) => {
        console.log('issue in db connection');
        console.error(err.message);//iska matlb? find out
        process.exit(1);
    });;
}
 
module.exports=dbConnect;