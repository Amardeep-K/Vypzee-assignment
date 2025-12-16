import { ApiResponse } from '../utils/apiResponse.js';
import { CustomError } from '../utils/apiErrorResponse.js';
import bcrypt from 'bcrypt';

import { User } from '../models/user.model.js';

const cookieOptions = {
  httpOnly: true,
  secure: true,        // REQUIRED in prod
  sameSite: "none",    // REQUIRED for cross-site
  maxAge: 7 * 24 * 60 * 60 * 1000
};

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = new User({
      username,
      email,
      password,
    });

    const savedUser = await user.save();

    return res
      .status(201)
      .json(new ApiResponse(200, 'User registered successfully', savedUser));
  } catch (error) {
    throw new CustomError(500, 'Something Went Wrong', error.message);
  }
};

export const login = async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      throw new CustomError(400, "Username and password required");
    }
  
    const user = await User.findOne({ username });
    if (!user) {
      throw new CustomError(400, "User not found");
    }
  
    const isValidPassword = await user.isPasswordCorrect(password);
    if (!isValidPassword) {
      throw new CustomError(400, "Invalid credentials");
    }
  
    const token = user.generateToken();
  
    await user.save({ validateBeforeSave: false });
  
    const loginUser = await User.findById(user._id).select("-password");
  
    return res
      .status(200)
     
      .cookie("jwt", token, cookieOptions)
      .json(
        new ApiResponse(200, { user: loginUser }, "User logged in successfully")
      );
  };
  

export const logout = async (req, res) => {
  const userId = req.user._id;
  

  return res
    .status(200)
    
    .clearCookie('jwt', cookieOptions)
    .json(new ApiResponse(200, {}, 'User logged out successfully'));
};


