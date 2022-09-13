import { Container, Grid, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./Register.module.scss";
import axios from "axios";

const Register = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/api/register", {
        name: value.name,
        email: value.email,
        password: value.password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles._wrapper}>
      <Container>
        <Grid container spacing={1} justifyContent="center">
          <Grid md={6} sm={10} xs={12}>
            <div>
              <Typography variant="h6" color="initial" component="h6">
                Register
              </Typography>
              <input
                value={value.name}
                onChange={handleChange("name")}
                type="text"
                placeholder="Enter your Name"
              />
              <input
                value={value.email}
                onChange={handleChange("email")}
                type="email"
                placeholder="Enter your Email"
              />
              <input
                value={value.password}
                onChange={handleChange("password")}
                type="password"
                placeholder="Enter your Password"
              />

              <Button
                variant="contained"
                color="inherit"
                onClick={handleSubmit}
              >
                Register
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
