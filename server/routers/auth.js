const express = require("express");
const { register } = require("../controllers/auth");
const { runValidation } = require("../validators");
const { useRegisterValidator } = require("../validators/auth");

const router = express.Router();

router.post("/register", useRegisterValidator, runValidation, register);

module.exports = router;
