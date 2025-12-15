import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.cookies?.jwt

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
        _id: decoded._id,
        username: decoded.username,
        email: decoded.email,
      };
      

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
