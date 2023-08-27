import mongoose from "mongoose";

export async function connect() {
  try{
    mongoose.connect(process.env.MONGO_URI!);
    const conn = mongoose.connection;

    conn.on('connected', () => {
      console.log("Connected to DB");
    })

    conn.on('error',(err)=>{
      console.log("MongoDB connection error. Please make sure MongoDB is running." + err);
      process.exit();
    })

  }catch(error){
    console.log("Error connecting to DB");
    console.log(error);
  }
  
}