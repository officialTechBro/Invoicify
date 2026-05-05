import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import path from 'path'
import connectDB from './config/db.js'

const app = express()

// Middleware to handle CORS
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

// Connect Database
connectDB()

// Middleware
app.use(express.json())

// Routes

// Start Server
const PORT = process.env.PORT || 3300
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))