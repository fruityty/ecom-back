// /models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  description: String, // you can add more fields here
});

// collection Users
const User = mongoose.model("User", userSchema, 'Users');

export default User;
