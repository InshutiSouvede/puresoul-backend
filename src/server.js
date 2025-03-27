import morgan from "morgan";
import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import SwaggerUI from 'swagger-ui-express'
import { mongodb_url, port } from "./constants.js";
import authRouter from "./routes/AuthRouter.js";
import userRouter from "./routes/UserRoute.js";
import YAML from "yamljs";
import bookRouter from "./routes/BookRoute.js";
import expertRouter from "./routes/ExpertRoute.js";

const swaggerDocumentation = YAML.load("./swagger.yaml")
const app = express()
app.use(morgan("short"))
app.use(express.json())
app.use(cors())



mongoose.connect(mongodb_url)
.then(()=>{
    console.log("Successfully connected to the database")
})
.catch((error)=>{
    console.log("Oops, could not connect to the database", error.message)
})

app.use('/api-docs',SwaggerUI.serve,SwaggerUI.setup(swaggerDocumentation))

app.use('/auth',authRouter)
app.use("/users",userRouter)
app.use("/books",bookRouter)
app.use("/experts",expertRouter)
app.all("*",(req,res)=>res.json({error:true,message:`Route ${req.originalUrl} not found`}))

app.listen(port,()=>{
console.log("Server listening on port",port)
})
