const express = require("express");
const router = express.Router();
const AuthController = require("../../controllers/auth.Controller");

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.post("/register-company", AuthController.registerCompany);
router.get("/activation/:token", AuthController.activeAccount);
router.put("/:id", AuthController.updateUserInfo);
router.delete("/:id", AuthController.deleteUser);
router.post("/sendmail", AuthController.sendMail);
router.get("/refresh", AuthController.refreshToken);
router.post("/forgot-password", AuthController.forgotPassWord);
router.post("/reset-password", AuthController.resetPassword);

module.exports = router;
