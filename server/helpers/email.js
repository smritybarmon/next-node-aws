exports.registerEmailParams = (email, token) => {
  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: [process.env.EMAIL_TO],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
          <html>
            <body>
              <h2>Hello ${name}</h2>
              <p>Please use the following link to complete your registration</p>
              <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>

              <h2>Thank you</h2>
              <p>Have a good day</p>
            </body>
          </html>`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Complete your registration",
      },
    },
  };
};
