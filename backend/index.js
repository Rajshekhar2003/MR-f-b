import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRout from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express()
app.use(cors());
app.use(express.json());
dotenv.config();
const port =process.env.PORT || 4000;
const URI=process.env.MongoDBURI
// connect to mongodb
try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true

    });
    console.log("connected to mongodb");
}catch(error){
    console.log("Error:" ,error);

}
app.use("/book",bookRout);
app.use("/user",userRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
