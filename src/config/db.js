import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`MongoDb connection error: ${error.message}`)
        process.exit(1)
    }
}
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected")
})
mongoose.connection.on("error", (err) => {
    console.log(`MongoDB connection error: ${err.message}`)
})