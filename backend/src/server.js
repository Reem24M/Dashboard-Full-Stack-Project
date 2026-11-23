import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from '../config/db.js'
import authRoutes from '../Routes/authRoute.js'
import productRoutes from '../Routes/productRoute.js'
import userRoutes from '../Routes/usersRoute.js'
import ordersRoutes from '../Routes/ordersRoute.js'
import dashboardRoute from '../Routes/dashboardRoute.js'
dotenv.config()

connectDB();

const app=express()

app.use(cors())
app.use(express.json())

app.use('/auth',authRoutes)
app.use('/products',productRoutes)
app.use('/users',userRoutes)
app.use('/orders',ordersRoutes)
app.use('/dashboard',dashboardRoute)
const PORT=process.env.PORT 

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/api/users",(req,res)=>{
    const users=[
        {id:1,name:"john"},
        {id:2,name:"jane"},
        {id:3,name:"doe"},
    ]
    res.json(users)
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})