import {
  Alert,
  Button,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { API } from "../../config";
import Message from "../../Helper/Message";
import styles from "./Login.module.scss";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API}/login`, {
        email: value.email,
        password: value.password,
      });

      console.log(response);
      setValue({
        ...value,
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      setValue({
        ...value,
        success: "",
        error: error?.response?.data?.error,
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
                Log-in
              </Typography>

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
                Login
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
