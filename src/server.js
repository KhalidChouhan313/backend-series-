import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoutes from "./routes/routes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
dotenv.config()
const app = express();

app.use(express.json());
app.use(cors());
connectDB();

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
    res.send("API is running...")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ message: "Something went wrong", error: err.message });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

})