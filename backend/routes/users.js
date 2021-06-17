const express = require("express");
const router = express.Router();
const { validateUser } = require("../validator/userValidator");

const UserController = require("../controller/userController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/show", UserController.getData);
router.get("/show/:UserId", UserController.getDataById);
router.delete("/delete/:UserId", UserController.deleteDataById);
router.put("/edit/:UserId", UserController.updateDataById);

module.exports = router;
