import mongoose from "mongoose";
const clientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    contactNo:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        default:"No description mentioned"
    }
},{timestamps:true})
export const Client=mongoose.model("Schema",clientSchema)