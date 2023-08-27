import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:[true,"Please provide a Username"],
    unique:true,

  },
  password:{
    type:String,
    required:[true,"Please provide a Password"],
    minlength:6
  },
  email:{
    type:String,
    required:[true,"Please provide an Email"],
    unique:true,
  },
  isVerified:{
    type:Boolean,
    default:false
  },
  isAdmin:{
    type:Boolean,
    default:false
  },
  forgotPasswordToken:String,
  forgotPasswordTokenExpiary:Date,
  verifyToken:String,
  verifyTokenExpiary:Date,

})

const User = mongoose.models.user||mongoose.model("user",userSchema);
export default User;