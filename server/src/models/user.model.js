import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";    
const userSchema = new Schema({
   
       avatar: {
  url: { type: String, default: "https://www.istockphoto.com/photos/blank-avatar" },
  localPath: { type: String, default: "https://www.istockphoto.com/photos/blank-avatar" },
}

    ,
    username:{
        type:String,
        required:true,
        trim:true

    },
    password:{
        type:String,
        required:[true , "Enter Password"]

    },
    email:{
        unique:true,
        type:String,
        required:true,
        lowercase:true

    }
   
},{timestamps:true})
//Access Tokens
userSchema.methods.generateToken = function () {
    return jwt.sign(
      {
        _id: this._id,
        username: this.username,
        email: this.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d", // or 15m / 1h
      }
    );
  };


// Opaque token  , these tokens are much secure but are slower than the above ones which contains the data



// Hooks
userSchema.pre("save",async function (next){
    if(!this.isModified("password")) return  ;
         this.password=await bcrypt.hash(this.password,10);
         return ;

    }
)

//Method
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password);
}
export const User = mongoose.model("User",userSchema);