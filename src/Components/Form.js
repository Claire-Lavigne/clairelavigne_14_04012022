import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import states from "../data/states.json";
import jobDepartments from "../data/jobDepartments.json";
import { useDispatch } from "react-redux";
import { SHOWMODAL } from "../redux/reducers/displayModal";

const Form = () => {
  const dispatch = useDispatch();
  const saveEmployee = (e) => {
    e.preventDefault();
    dispatch({
      type: SHOWMODAL,
    });
  };
  return (
    <Box
      id="createEmployee"
      component="form"
      noValidate
      onSubmit={saveEmployee}
      sx={{ textAlign: "center", "& button": { width: "25%" } }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lasName"
            label="Last Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="dateOfBirth"
            label="Date of Birth"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="startDate"
            label="Start Date"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <Typography my={2} component="h3" variant="h6" fullWidth>
        Address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField id="street" label="Street" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="city" label="City" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" label="State" value="" select fullWidth>
            {states.map((state, index) => {
              return (
                <div key={index}>
                  <MenuItem value={state.abbreviation}>{state.name}</MenuItem>
                </div>
              );
            })}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            id="zipCode"
            label="Zip Code"
            variant="outlined"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="jobDepartment"
            label="Department"
            value=""
            select
            fullWidth
          >
            {jobDepartments.map((dept, index) => {
              return (
                <div key={index}>
                  <MenuItem value={dept.name}>{dept.name}</MenuItem>
                </div>
              );
            })}
          </TextField>{" "}
        </Grid>
      </Grid>
      <div>
        <Button
          type="submit"
          sx={{ my: "1rem" }}
          size="large"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Save
        </Button>
      </div>
    </Box>
  );
};

export default Form;
