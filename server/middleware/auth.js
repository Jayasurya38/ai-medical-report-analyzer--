import jwt from "jsonwebtoken"

export const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token, access denied" })
    }

    const token = authHeader.split(" ")[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
    console.log("Decoded token:", decoded)  // ← this shows us what's inside
    
    req.user = decoded
    next()

  } catch (err) {
    console.log("Token error:", err.message)
    res.status(401).json({ message: "Invalid token" })
  }
}

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access only" })
  }
  next()
}