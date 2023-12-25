// user.modal.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar:{
      type:String,
     default:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/s458/blank-profile-picture-hd-images-photo.JPG",
  },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
export default User;

