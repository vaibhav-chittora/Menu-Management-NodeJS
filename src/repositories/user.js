import User from "../schema/userSchema.js";

export const createUser = async ({ username, email, password }) => {
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    return user;
  } catch (error) {
    console.log("Error in Create Usser Respository", error);
    throw error;
  }
};

export const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.log("Error in Find User By Email Respository", error);
    throw error;
  }
};
