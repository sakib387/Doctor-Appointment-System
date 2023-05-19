const   mongoose  = require("mongoose")

 const useSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    }
 })

 const useModel=mongoose.model('user',useSchema)

 module.exports=useModel
