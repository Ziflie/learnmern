export const MONGO_URI = "mongodb+srv://RayanMeziani123:RayanMeziani123@cluster0.ndk5kn9.mongodb.net/?retryWrites=true&w=majority"
import mongoose from "mongoose"


export async function connectMongo() {
    try {
        const { connection } = await mongoose.connect(MONGO_URI)

        if(connection.readyState == 1) {
                console.log("Database connected")
        }
    } catch(errors) {
        return Promise.reject(errors)
    }
}
