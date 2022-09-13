const User = require("../models/user");
const jwt = require("jsonwebtoken");
const AWS = require("aws-sdk");
const { reset } = require("nodemon");
const { registerEmailParams } = require("../helpers/email");

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
    const params = registerEmailParams(email, token);
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
      .then((res) => {
        console.log("email submitted to ses");
        reset.email("Email Sent");
      })
      .catch((err) => {
        console.log("ses email on register", err);
        res.send("email failed");
      });
  });

  // res.status(200);
};
