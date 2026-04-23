import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


dotenv.config()
import authRoutes from "./routes/auth.js"
import reportRoutes from "./routes/reports.js"

const app = express()

app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(express.json())

// Routes
app.use("/api/auth",    authRoutes)
app.use("/api/reports", reportRoutes)

app.get("/", (req, res) => {
  res.json({ message: "Medical AI server is Running" })
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB")
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err)
  })