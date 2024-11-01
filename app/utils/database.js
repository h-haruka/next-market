import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://overdive1225:3104satoshi@cluster0.9ccgr.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Success: Connected to MongoDB")
  } catch {
    console.log("Failure: Unconnected to MondoDB")
    throw new Error()
  }
}

export default connectDB