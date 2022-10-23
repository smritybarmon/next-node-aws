const express = require("express");
const { register, registerActivate, login } = require("../controllers/auth");
const { runValidation } = require("../validators");
const {
  useRegisterValidator,
  userLoginValidator,
} = require("../validators/auth");

const router = express.Router();

router.post("/register", useRegisterValidator, runValidation, register);
router.post("/register/activate", registerActivate);
router.post("/login", userLoginValidator, runValidation, login);

module.exports = router;
