import { Container, Grid, Button, Typography, Card } from "@mui/material";
import React, { useState } from "react";
import styles from "./Register.module.scss";
import axios from "axios";
import { API } from "../../config";
import Message from "../../Helper/Message";

const Register = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    success: "",
    error: "",
  });
  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API}/register`, {
        name: value.name,
        email: value.email,
        password: value.password,
      });

      console.log(response);
      setValue({
        ...value,
        name: "",
        email: "",
        password: "",
        success: response.data.message,
        error: "",
      });
    } catch (error) {
      console.log(error);
      setValue({
        ...value,
        success: "",
        error: error.response.data.error,
      });
    }
  };
  return (
    <div className={styles._wrapper}>
      {value.success && <Message text={value.success} severity="success" />}
      {value.error && <Message text={value.error} severity="error" />}
      <Container>
        <Grid container spacing={1} justifyContent="center">
          <Grid md={6} sm={10} xs={12}>
            <Card className={styles._card}>
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
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
