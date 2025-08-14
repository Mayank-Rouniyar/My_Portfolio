import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";
import { Client } from "../model/client.model.js";
const registerUser=asyncHandler(async(req,res)=>{
   const {name,contactNo,description}=req.body
   if(!name||!contactNo)
   {
    throw new ApiError(400,"Name and Contact No is required")
   }
   const isClient=await Client.findOne({
    contactNo
   })
   if(isClient)
   {
     throw new ApiError(409,"Your Contact No is already Present")
   }
   const client=await Client.create({
    name,
    contactNo,
    description:description,
   })
   if(!client)
   {
    throw new ApiError(500,"Some error occured while saving the profile")
   }
   return res
   .status(201)
   .json(new ApiResponse(201,client,"Client Successfully Created"))
})
export{
    registerUser
}