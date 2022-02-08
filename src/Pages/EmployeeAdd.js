import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Form from "../Components/Form";
import ABCModal from "../Components/ABCModal";

const EmployeeAdd = () => {
  const [isOpen, setOpen] = useState(false);
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
      <Form setOpen={setOpen} />
      <ABCModal isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default EmployeeAdd;
