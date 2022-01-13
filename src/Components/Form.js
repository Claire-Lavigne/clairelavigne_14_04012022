import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Modal from "./Modal";
import states from "../data/states.json";
import jobDepartments from "../data/jobDepartments.json";
import { useDispatch } from "react-redux";
import { createEmployee } from "../redux/reducers/employeeSlice";

const Form = () => {
  const [user, setUser] = useState({});
  const [displayError, setDisplayError] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const saveEmployee = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      employee: user,
    };

    if (Object.keys(data.employee).length === 0) {
      setDisplayError(true);
      return false;
    } else if (
      data.employee.firstname === undefined ||
      data.employee.lastname === undefined ||
      data.employee.birthdate === undefined ||
      data.employee.startdate === undefined
    ) {
      setDisplayError(true);
      return false;
    }

    setDisplayError(false);
    dispatch(createEmployee(data));
    setOpen(true);
  };
  return (
    <>
      <Box
        id="createEmployee"
        component="form"
        noValidate
        onSubmit={saveEmployee}
        sx={{ textAlign: "center", "& button": { width: "25%" } }}
      >
        {displayError && (
          <Typography
            required
            variant="overline"
            display="block"
            gutterBottom
            sx={{ color: "red" }}
          >
            Please fill in the missing fields
          </Typography>
        )}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              error={user.firstname === undefined}
              required
              id="firstName"
              label="First Name"
              fullWidth
              onChange={(e) =>
                setUser({
                  ...user,
                  firstname: e.target.value.trim(),
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={user.lastname === undefined}
              required
              id="lasName"
              label="Last Name"
              fullWidth
              onChange={(e) =>
                setUser({
                  ...user,
                  lastname: e.target.value.trim(),
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={user.birthdate === undefined}
              required
              id="dateOfBirth"
              label="Date of Birth"
              fullWidth
              onChange={(e) =>
                setUser({
                  ...user,
                  birthdate: e.target.value.trim(),
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={user.startdate === undefined}
              required
              id="startDate"
              label="Start Date"
              fullWidth
              onChange={(e) =>
                setUser({
                  ...user,
                  startdate: e.target.value.trim(),
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={user.department === undefined}
              required
              id="jobDepartment"
              label="Department"
              value={user.department}
              select
              fullWidth
              onChange={(e) =>
                setUser({
                  ...user,
                  department: e.target.value.trim(),
                })
              }
              sx={{ textAlign: "left" }}
            >
              {jobDepartments.map((dept, index) => (
                <MenuItem key={index} value={dept.name}>
                  {dept.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Typography my={2} component="h3" variant="h6" fullWidth>
          Address
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              error={user.addressStreet === undefined}
              required
              id="street"
              label="Street"
              fullWidth
              onChange={(e) =>
                setUser({
                  ...user,
                  addressStreet: e.target.value.trim(),
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={user.addressCity === undefined}
              required
              id="city"
              label="City"
              fullWidth
              onChange={(e) =>
                setUser({
                  ...user,
                  addressCity: e.target.value.trim(),
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={user.addressState === undefined}
              required
              id="state"
              label="State"
              value={user.addressState}
              select
              fullWidth
              onChange={(e) =>
                setUser({
                  ...user,
                  addressState: e.target.value.trim(),
                })
              }
              sx={{ textAlign: "left" }}
            >
              {states.map((state, index) => (
                <MenuItem key={index} value={state.abbreviation}>
                  {state.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={user.addressZipcode === undefined}
              required
              id="zipCode"
              label="Zip Code"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              fullWidth
              onChange={(e) =>
                setUser({
                  ...user,
                  addressZipcode: e.target.value.trim(),
                })
              }
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          sx={{ my: "1rem" }}
          size="large"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Save
        </Button>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        closeOutside={true}
      />
    </>
  );
};

export default Form;
