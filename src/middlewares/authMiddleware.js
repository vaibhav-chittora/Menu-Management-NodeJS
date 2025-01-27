import jwt from "jsonwebtoken";
export const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) {
      return res.status(401).json({
        success: false,
        status: 404,
        message: "Token not found",
      });
    }

    const response = jwt.verify(token, JWT_SECRET);

    req.user = response;

    next();

    return res.status(200).json({
      success: true,
      message: "User is authenticated",
    });
  } catch (error) {
    console.log("Error in auth middleware", error);
    return res.status(500).json({
      success: false,
      message: "Invalid Token",
      error: error.message,
    });
  }
};
