const URL = "mongodb+srv://abcd123:1234@cluster1.k0zgrhc.mongodb.net/userdb?retryWrites=true&w=majority";
import mongoose from "mongoose";
const promise=mongoose.connect(URL);
promise.then(data=>{
    console.log("Database connected")
}).catch(err=>{
    console.log("Error", err)
})
export default mongoose;

