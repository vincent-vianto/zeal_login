const jwt = require("jsonwebtoken");
const privateKey = "null";

module.exports.validateUser = (req, res, next) => {
  jwt.verify(req.headers["x-access-token"], privateKey, (err, decoded) => {
    if (err) {
      res.status(401).json({
        ...err,
        message: "Sorry, it seems you haven't login. Try login again.",
      });
    } else {
      req.id = decoded.id;
      next();
    }
  });
};
