import jwt from 'jsonwebtoken'
export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken; // ✅ correct cookie name

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET); // ✅ match the secret used

    req.user = decoded; 
    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
