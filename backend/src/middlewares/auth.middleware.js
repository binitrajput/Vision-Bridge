import httpStatus from "http-status";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];

    if (!token) {
        return res.status(httpStatus.FORBIDDEN).json({ message: "No token provided" });
    }

    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    jwt.verify(token, "MY_SECRET_KEY_12345", (err, decoded) => {
        if (err) {
            return res.status(httpStatus.UNAUTHORIZED).json({ message: "Unauthorized: Invalid token" });
        }
        req.user = decoded;
        next();
    });
};
