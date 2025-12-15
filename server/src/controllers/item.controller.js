 import { ApiResponse } from "../utils/apiResponse.js";
 import { CustomError } from "../utils/apiErrorResponse.js";
 import { ShopingList } from "../models/product.model.js";

 export const getAllShoppingItems=async(req,res)=>{
    const items = await ShopingList.find().populate("user");
    if(items.length===0){
        return res.status(200),json(new ApiResponse(200,"No Items"))
    }
    return res.status(200).json(new ApiResponse(200,"Items Fetched",items))
 }

 export const addShoppingItems = async(req,res)=>{
   
    const {title,quantity}=req.body;
    const newItems = await new ShopingList({
        title:title,
        quantity:quantity,
       
        
    })
   const savedItems=await newItems.save();
    if(!newItems){
        throw new CustomError(400,"item not created");  
    }
    return res.status(200).json(new ApiResponse(200,"Item added successfully",savedItems))
 }

 export const updateShoppingList = async (req,res)=>{
    const{id} = req.params;
    const  { completed }=req.body;
    const item = await ShopingList.findById(id);
    console.log(completed);
    
    if(!item){
        throw new CustomError(404,"Item not Found")
    }
    item.completed=completed;
    const updatedItem=await item.save();
    console.log(updatedItem);
    
    return  res.status(200).json(new ApiResponse(200,"List updated successfully",updatedItem));
 }

 