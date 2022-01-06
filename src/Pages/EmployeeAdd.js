import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Form from "../Components/Form";
import Modal from "../Components/Modal";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const EmployeeAdd = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        sx={{ my: "1rem" }}
        align="center"
      >
        HRnet
      </Typography>
      <div className="container">
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
        <Button
          type="submit"
          sx={{ my: "1rem" }}
          size="large"
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => setOpen(true)}
        >
          Save
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          closeOutside={true}
        />
      </div>
    </>
  );
};

export default EmployeeAdd;
