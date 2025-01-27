import { token } from "morgan";
import { signInService, signUpService } from "../services/user.js";

export const signUpController = async (req, res) => {
  try {
    const user = await signUpService(req.body);
    return res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: user,
    });
  } catch (error) {
    console.log("Error in SignUp Controller", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

export const signInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await signInService({ email, password });

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }
    return res.status(200).json({
      success: true,
      messsage: "User Logged In Successfully",
      data: user,
    });
  } catch (error) {
    console.log("Error in SignIn Controller", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};
