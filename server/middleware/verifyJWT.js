import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

const verifyJwt = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.sendStatus(401);//unauthorized
    console.log(authHeader); // Bearer token (written in this format at the client side) 
    const token = authHeader.split(' ')[1];// to get the token only
    jwt.verify(
        token,
        ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            req.user_id = decoded._id;
            next();
        }
    );
}