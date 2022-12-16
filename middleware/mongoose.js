import mongoose from "mongoose";

const connectDb = handler => async(req,res)=>
{
    if(mongoose.connections[0].readyState){
        return handler(req,res);
    }
    await mongoose.connect('mongodb+srv://amit1297:yLFOO9EefwQGVwG3@cluster0.fpjgrj9.mongodb.net/nestjsdatabase?retryWrites=true&w=majority')
    return handler(req,res);
}

export default connectDb;
