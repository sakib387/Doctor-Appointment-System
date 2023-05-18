const express =require('express')
const colors=require('colors')
const morgan=require('morgan')
const dotenv=require('dotenv')



//rest object
const app=express()

//dotenv config
dotenv.config()
//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.get("/",(req,res)=>{
    res.status(200).send('sakib i love you')
})

// port
const PORT=process.env.PORT||8000


//listen port
app.listen(PORT,()=>{
    console.log(`Server is Runnint in ${process.env.DEV_MODE} mode on port http://localhost:${PORT}`.bgCyan.white)

})