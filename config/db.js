const mongoose=require('mongoose')
const colors=require('colors')


const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connected DB successfully'.bgRed.white)
    }
    catch(er){
        console.log(`Mongodb error ${er}`.bgRed.white)
    }
}

module.exports=connectDB