const mongoose=require("mongoose");
// const validator=require("validator")



const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    message:{
        type:String,
        required:true,
        minLength:3
    }

})

// we need a collection
const User=mongoose.model("User",userSchema);
module.exports=User;