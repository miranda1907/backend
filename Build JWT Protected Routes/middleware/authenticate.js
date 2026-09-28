import { verifyToken } from "../utils/jwt.js";
import { isBlacklisted } from "../utils/token-blacklist.js";

export default function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }
  const token = authHeader.split(" ")[1];
  // ...verify the token next
  const verifiedToken = verifyToken(token);

  const blacklisted = isBlacklisted(token);

  if (blacklisted) {
    return res.status(401).json({ message: "Token has been invalidated. Log in again."})
  }

  if (!verifiedToken) {
    return res.status(401).json({ message: "Invalid or expired token" })
  }
  req.user = verifiedToken;
  next();

}
