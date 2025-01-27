import { createUser, findUserByEmail } from "../repositories/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/serverConfig.js";

export const signUpService = async (userObject) => {
  try {
    const user = await createUser(userObject);
    return user;
  } catch (error) {
    console.log("Error in SignUp Service", error);
    if (error.name === "MongoServerError" && error.code === 11000) {
      throw {
        status: 400,
        message: "User with same email or username already exists",
      };
    }
    throw error;
  }
};

export const signInService = async (userDetails) => {
  try {
    const user = await findUserByEmail(userDetails.email);
    if (!user) {
      throw {
        status: 404,
        message: "User not found",
      };
    }

    const isPasswordValid = await bcrypt.compareSync(
      userDetails.password,
      user.password
    );
    if (!isPasswordValid) {
      throw {
        status: 401,
        message: "Invalid Password",
      };
    }

    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        username: user.username,
      },
      JWT_SECRET,
      { expiresIn: "1d" }
    );
    return {
      user,
      token,
    };
  } catch (error) {
    console.log("Error in SignIn Service", error);
    throw error;
  }
};
