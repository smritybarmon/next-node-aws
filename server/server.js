const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// db
mongoose
  .connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true })
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log(err));

// import routes
const authRoutes = require("./routers/auth");

// app middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// middleware
app.use("/api", authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`your server is running on ${port}`);
});
