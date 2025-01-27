import { createUser, findUserByEmail } from "../repositories/user.js";

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

export const signInService = async (userObject) => {
  try {
    const user = await findUserByEmail(userObject.email);
    if (!user) {
      throw {
        status: 404,
        message: "User not found",
      };
    }

    if (!user.email || !user.password) {
      throw {
        status: 400,
        message: "Email and Password are required",
      };
    }
    return user;
  } catch (error) {
    console.log("Error in SignIn Service", error);
    throw error;
  }
};
