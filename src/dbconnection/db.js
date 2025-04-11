import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
    try {
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URL2}/amazonclone`)
        console.log(`mongodb connected successfully (amazonclone) : ${connectioninstance.connection.host}`);
    } catch (error) {
        console.log("error connecting to database", error);
        process.exit(1)
    }
}

export {connectDb}