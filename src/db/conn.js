const mongoose=require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/thapadynamic",{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connnection successful");
}).catch((e)=>{
    console.log(e)
})