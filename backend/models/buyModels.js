import mongoose from "mongoose";

const buySchema = mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    yearOfBuy:{
        type:String,
        required:true,
    },
    kmDriven:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    owner:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    emi:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
},{timestamp:true})

export const Buy = mongoose.model("Buy",buySchema);