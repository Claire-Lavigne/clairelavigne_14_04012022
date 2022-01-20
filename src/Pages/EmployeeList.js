import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import EmployeeTable from "../Components/Table";

const EmployeeList = () => {
  return (
    <div id="employee-div" className="container">
      <Typography
        component="h1"
        variant="h2"
        sx={{ my: "1rem" }}
        align="center"
      >
        Current Employees
      </Typography>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <EmployeeTable />
    </div>
  );
};

export default EmployeeList;
