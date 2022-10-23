const User = require("../models/user");
const jwt = require("jsonwebtoken");
const AWS = require("aws-sdk");
const { registerEmailParams } = require("../helpers/email");
const shortId = require("shortid");

AWS.config.update({
  accessKey: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

exports.register = (req, res) => {
  // console.log("register controllers", req.body);

  const { name, email, password } = req.body;

  // check if user is exists in our database
  User.findOne({ email }).exec((err, user) => {
    if (user) {
      console.log(err);
      return res.status(400).json({
        error: "Email is already exists in our database",
      });
    }

    // generate token with user name with email and password
    const token = jwt.sign(
      { name, email, password },
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: "10m",
      }
    );

    // send email
    const params = registerEmailParams(name, email, token);
    // const params = {
    //   Source: process.env.EMAIL_FROM,
    //   Destination: {
    //     ToAddresses: [email],
    //   },
    //   ReplyToAddresses: [process.env.EMAIL_TO],
    //   Message: {
    //     Body: {
    //       Html: {
    //         Charset: "UTF-8",
    //         Data: `
    //       <html>
    //         <body>
    //           <h2>Hello ${name}</h2>
    //           <p>Please use the following link to complete your registration</p>
    //           <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>

    //           <h2>Thank you</h2>
    //           <p>Have a good day</p>
    //         </body>
    //       </html>`,
    //       },
    //     },
    //     Subject: {
    //       Charset: "UTF-8",
    //       Data: "Complete your registration",
    //     },
    //   },
    // };

    // send email
    const sendEmailOnRegister = ses.sendEmail(params).promise();

    sendEmailOnRegister
      .then((data) => {
        console.log("email submitted to ses", data);
        res.json({
          message: `Email has been sent to ${email}, follow the instructions to complete your registration`,
        });
      })
      .catch((err) => {
        console.log("ses email on register", err);
        res.json({
          error: `We could not verify your email. Please try again`,
        });
      });
  });

  // res.status(200);
};

exports.registerActivate = (req, res) => {
  const { token } = req.body;
  // console.log(token);

  jwt.verify(
    token,
    process.env.JWT_ACCOUNT_ACTIVATION,
    function (err, decoded) {
      if (err) {
        return res.status(401).json({
          error: "Expired link, Try again",
        });
      }
      const { name, email, password } = jwt.decode(token);
      const userName = shortId.generate();

      User.findOne({ email }).exec((err, user) => {
        if (user) {
          return res.status(401).json({
            error: "Error is token",
          });
        }

        // register new user
        const newUser = new User({ userName, name, email, password });
        newUser.save((err, result) => {
          if (err) {
            return res.status(401).json({
              error: "Error saving user in database. try later",
            });
          }

          return res.json({
            message: "Registration success. Please Login",
          });
        });
      });
    }
  );
};

// login controllers
exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist. Please register",
      });
    }

    // authenticate user
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and password do not match",
      });
    }

    // generate token and send to client
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, name, email, role } });
  });
};
