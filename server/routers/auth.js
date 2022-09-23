const express = require("express");
const { register, registerActivate } = require("../controllers/auth");
const { runValidation } = require("../validators");
const { useRegisterValidator } = require("../validators/auth");

const router = express.Router();

router.post("/register", useRegisterValidator, runValidation, register);
router.post("/register/activate", registerActivate);

module.exports = router;
