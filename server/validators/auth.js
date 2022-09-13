const { check } = require("express-validator");

exports.useRegisterValidator = [
  check("name").not().isEmpty().withMessage("Name is require"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password")
    .isLength(6)
    .withMessage("Password must be at least 6 characters long"),
];
