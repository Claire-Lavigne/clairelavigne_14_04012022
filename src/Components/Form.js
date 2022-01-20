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
import states from "../data/states.json";
import jobDepartments from "../data/jobDepartments.json";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/reducers/employeeSlice";
import Modal from "react-abc-modal";

const Form = () => {
  const [user, setUser] = useState({});
  const [displayError, setDisplayError] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const saveEmployee = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      ...user,
    };

    if (Object.keys(data).length === 0) {
      setDisplayError(true);
      return false;
    } else if (
      data.firstname === undefined ||
      data.lastname === undefined ||
      data.birthdate === undefined ||
      data.startdate === undefined ||
      data.department === undefined ||
      data.street === undefined ||
      data.city === undefined ||
      data.state === undefined ||
      data.zipcode === undefined
    ) {
      setDisplayError(true);
      return false;
    }

    setDisplayError(false);
    dispatch(addEmployee(data));
    openModal();
  };
  return (
    <>
      <Box
        id="addEmployee"
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
              value={user.department || ""}
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
              error={user.street === undefined}
              required
              id="street"
              label="Street"
              fullWidth
              onChange={(e) =>
                setUser({
                  ...user,
                  street: e.target.value.trim(),
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={user.city === undefined}
              required
              id="city"
              label="City"
              fullWidth
              onChange={(e) =>
                setUser({
                  ...user,
                  city: e.target.value.trim(),
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={user.state === undefined}
              required
              id="state"
              label="State"
              value={user.state || ""}
              select
              fullWidth
              onChange={(e) =>
                setUser({
                  ...user,
                  state: e.target.value.trim(),
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
              error={user.zipcode === undefined}
              required
              id="zipCode"
              label="Zip Code"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              fullWidth
              onChange={(e) =>
                setUser({
                  ...user,
                  zipcode: e.target.value.trim(),
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
      <Modal isOpen={isOpen} onClose={closeModal} closeOutside={true}>
        <Typography
          component="h3"
          variant="h2"
          sx={{ my: "3rem" }}
          align="center"
        >
          Employee Created!
        </Typography>
      </Modal>
    </>
  );
};

export default Form;
