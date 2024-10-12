const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "no token provided, authorization denied" });
    }

    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decodedToken;
      console.log("decoded user: ",req.user);
      next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: "invalid token, authorization denied" });
    }
  } else {
    return res
      .status(401)
      .json({ message: "no token provided, authorization denied" });
  }
};

module.exports = verifyToken;
