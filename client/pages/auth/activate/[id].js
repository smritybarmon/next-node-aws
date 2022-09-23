import { withRouter } from "next/router";
import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
import { API } from "../../../config";
import Layout from "../../../components/Layout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Message from "../../../Helper/Message";
import { Card, CardContent, Container } from "@mui/material";

const ActivateAccount = ({ router }) => {
  const [state, setState] = useState({
    name: "",
    token: "",
    success: "",
    error: "",
  });

  const { name, token, success, error } = state;
  useEffect(() => {
    let token = router.query.id;
    if (token) {
      const { name } = jwt.decode(token);
      setState({ ...state, name, token });
    }
  }, [router]);

  const clickSubmit = async () => {
    try {
      const response = await axios.post(`${API}/register/activate`, { token });
      setState({
        ...state,
        name: "",
        token: "",
        success: response.data.message,
      });
    } catch (error) {
      setState({ ...state, error: error.response.data.error });
    }
  };

  return (
    <Layout>
      {success && <Message text={success} severity="success" />}
      {error && <Message text={error} severity="error" />}
      {/* <>{JSON.stringify(router)}</>
       */}
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "90vh" }}
        >
          <Grid item md={6} sm={12} xs={12}>
            <Card
              sx={{
                width: "100%",
                height: "400px",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Typography variant="h6" color="inherit">
                  Good day {name}, Ready to activate you activate?
                </Typography>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={clickSubmit}
                  style={{ marginTop: "30px" }}
                >
                  Active Account
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default withRouter(ActivateAccount);
