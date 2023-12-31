import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true ,unique: true},
    nationalId:  String,
    fullNames: String,
    password:{type: String, require: true},
    phoneNumber: String,
    location: String,
    image: String,
    role: {type: String, default: "user"},
    status: String,
    community: String,
   
});
export const User =mongoose.model("User", userSchema);