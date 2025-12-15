import { registerUser,login,logout } from "../controllers/auth.controller.js";
import { auth } from "../middleware/auth.middleware.js";
import { Router } from "express";
import { ApiResponse } from "../utils/apiResponse.js";
const authRouter = Router();
authRouter.get("/me", auth, (req, res) => {
        return res
          .status(200)
          .json(new ApiResponse(200, "User fetched successfully", req.user));
      });
authRouter.route("/register")
            .post(registerUser);
authRouter.route("/login")
        .post(login)

authRouter.get("/logout",auth,logout)




export default authRouter;
