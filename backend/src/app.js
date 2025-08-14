import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()
const allowedOrigin=[
    "http://localhost:5173",
    "https://jee-main-mock-test.vercel.app"
]
app.use(cors({
        origin:allowedOrigin,
        credentials:true,
    }))
app.use(express.json({limit:"16kb"}))
app.use(cookieParser())
import clientRouter from "./routes/client.route.js"
app.use("/api/v1/clients",clientRouter)
export {app}