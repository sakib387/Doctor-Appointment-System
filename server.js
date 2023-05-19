const express =require('express')
const colors=require('colors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const connectDB = require('./config/db')
const user=require('./routes/userRoute')


//rest object
const app=express()

//dotenv config
dotenv.config()

//mongodb connect

connectDB()

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/user',user)

// port
const PORT=process.env.PORT||8000


//listen port
app.listen(PORT,()=>{
    console.log(`Server is Runnint in ${process.env.DEV_MODE} mode on port http://localhost:${PORT}`.bgCyan.white)

})