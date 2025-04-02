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
app.get('/',(req,res)=>{
    res.status(200).send(
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to PureSoul API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 50px;
            background-color: #f4f4f4;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            display: inline-block;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
        .api-link {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
        .api-link:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to PureSoul API</h1>
        <p>This is the backend service for the PureSoul platform, providing mental health resources and expert connections.</p>
        <a class="api-link" href="/api-docs">View API Documentation</a>
    </div>
</body>
</html>`
    )
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
