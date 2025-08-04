// middleware/middleware.auth.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const auth1 = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).redirect('/auth/login');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).send('Token is not valid');
  }
};

export default auth1;
