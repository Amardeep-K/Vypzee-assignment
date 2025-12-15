import { mongoose , Schema } from "mongoose";
const shoppingListSchema = new Schema({
    
      
        title: {
               type:String
        },
        quantity:{
                type:Number
        },
        completed:{ 
                type:Boolean,
                default:false
        },
        user:{
                type: Schema.Types.ObjectId,
                ref: "User",
        }
      

},{timestamps:true})
export const ShopingList = mongoose.model("ShopingList",shoppingListSchema);