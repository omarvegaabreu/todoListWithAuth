/**MIDDLEWARE TO PROTECT ROUTE, BRING INTO ROUTE YOU NEED OR WANT TO PROTECT. */

const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;
console.log("JWT SECRET middleware/auth " + jwtSecret);

module.exports = (req, res, next) => {
  //get token from header
  const token = req.header("x-auth-token"); // checks if there is token in header.
  // console.log('token from middleware/auth.js')

  //check if there is no token
  if (!token) {
    //if no token will not authorize user. This will work for protected routes only.
    //res 401 unauthorized client
    return res.send(401).json({ msg: "User not authorized" });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.send().json({ msg: "Token is invalid." });
  }
};
