import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Form from "../Components/Form";

const EmployeeAdd = () => {
  return (
    <div className="container">
      <Typography
        component="h1"
        variant="h2"
        sx={{ my: "1rem" }}
        align="center"
      >
        HRnet
      </Typography>
      <nav>
        <Link to="/employee-list">View Current Employees</Link>
      </nav>
      <Typography
        component="h2"
        variant="h4"
        sx={{ my: "2rem" }}
        align="center"
      >
        Create Employee
      </Typography>
      <Form />
    </div>
  );
};

export default EmployeeAdd;
