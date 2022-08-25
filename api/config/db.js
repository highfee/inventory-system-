import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/" /*process.env.MONGO_URI*/)
        console.log(`Database connected on ${conn.connection.host}`.yellow.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}