const bcrypt = require("bcryptjs"); //https://www.npmjs.com/package/bcryptjs
const jwt = require("jsonwebtoken"); //  package docs https://jwt.io/
const jwtSecret = process.env.JWT_SECRET; //secret code for JWT config for auth token
const User = require("../models/User"); //user data
const { validationResult } = require("express-validator"); //package docs //https://express-validator.github.io/docs/

module.exports = {
  getUser: getUser,
  getToken: getToken,
};

async function getUser(req, res) {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error("Error line 17 routes/auth " + error.message);
    res.status(500).send("Server error");
  }
}

async function getToken(req, res) {
  const errorObject = validationResult(req);
  // console.log("errors array line 25 POST/API/AUTH " + { errorObject });
  if (!errorObject.isEmpty()) {
    return res.status(400).json({ errors: errorObject.array() });
  }

  const { email, password } = req.body; //destructure req.body object
  // console.log("email from auth line 31 " + email);
  // console.log("password from auth line 31 " + password);

  try {
    let user = await User.find({ email });
    // console.log("user auth line 35 " + user);
    if (!user || user.length == 0) {
      return res
        .status(400)
        .json({ msg: "Please check your email, and try again" });
    }
    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ msg: "Invalid password, please try again." });
    }

    //payload is required by package to create token
    // const payload = { user: { id: user.id } };

    const payload = {
      user: {
        id: user[0]._id,
      },
    };

    //secret key is required by package manager to generate token
    //this is information that will be sent to the client
    //expires object should be set back for production code to 3600 one hour
    jwt.sign(payload, jwtSecret, { expiresIn: 3600 }, (error, token) => {
      if (error) {
        throw error;
      }
      res.json({ token });
    });
  } catch (error) {
    res.status(500).send("Server error");
  }
}
