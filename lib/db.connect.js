
// this function well connect to the database 
// we will calling this function in the api routes
import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
 const connect = async () =>  mongoose.connect(uri, options).catch((err) => console.log(err));

 export default connect()