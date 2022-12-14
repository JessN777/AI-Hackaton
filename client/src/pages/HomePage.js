import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../global";

const companyProfiles = [
  {
    companyName: "Amazon",
    pictureUrl: "..//images/amazon-logo.png",
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Google",
    pictureUrl: "..//images/Google.jpg",
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Microsoft",
    pictureUrl: "..//images/Microsoft.png",
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Salesforce",
    pictureUrl: "..//images/Salesforce.png",
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Tesla",
    pictureUrl: "..//images/Tesla.png",
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Uber",
    pictureUrl: "..//images/Uber.png",
    companyValues: "commitment, teamwork, communication",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({});

  const handleCompanySelection = (companyName, companyValues) => {
    //There is a delay between setting and getting
    setGlobalState("companyName", companyName);
    setGlobalState("companyValues", companyValues);
    navigate("/position");
  };

  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = () => {
    setGlobalState("companyName", formValues.companyName);
    setGlobalState("companyValues", formValues.companyValues);
    navigate("/position");

    setFormValues({});
  };
  return (
    <Paper style={{ display: "flex", justifyContent: "center", padding: 20 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h6"
          style={{
            flexGrow: 1,
            textAlign: "left",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Better Prepare For Interviews
        </Typography>

        <Typography
          variant="b2"
          style={{
            flexGrow: 1,
            textAlign: "left",
            color: "black",
            fontWeight: "normal",
          }}
        >
          Internships are a great way to gain work experience and transition
          into a role post-graduation. Our team has built an application to
          provide you with feedback to
        </Typography>

        <Typography
          variant="b2"
          style={{
            flexGrow: 1,
            textAlign: "left",
            color: "black",
            fontWeight: "normal",
          }}
        >
          ace the behavioral interview. We will help you better structure your
          response, align with the company’s values and leave a strong lasting
          impression.
        </Typography>

        <Grid justifyContent="center" container my={1} spacing={3}>
          {companyProfiles.map((company) => (
            <Grid item key={company.companyName}>
              <Button
                sx={{ textTransform: "none" }}
                onClick={() =>
                  handleCompanySelection(
                    company.companyName,
                    company.companyValues
                  )
                }
              >
                <Card sx={{ minWidth: 345, maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="100"
                    image={require("..//images/amazon-logo.png")}
                    alt="amazon"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {company.companyName}
                    </Typography>
                  </CardContent>
                </Card>
              </Button>
            </Grid>
          ))}
        </Grid>

        <TextField
          label="Company Name"
          variant="outlined"
          margin="normal"
          name="companyName"
          value={formValues.companyName || ""}
          onChange={handleFormChange}
        />
        <TextField
          label="Company Values"
          variant="outlined"
          margin="normal"
          value={formValues.companyValues || ""}
          name="companyValues"
          onChange={handleFormChange}
        />
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          Submit
        </Button>
      </div>
    </Paper>
  );
};

export default HomePage;
