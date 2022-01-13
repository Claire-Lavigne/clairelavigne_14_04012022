import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employees",
  initialState: [],
  /*
    user: {
      id: "",
      firstname: "",
      lastname: "",
      birthdate: "",
      startdate: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipcode: "",
      },
      department: "",
    },
    */
  reducers: {
    createEmployee(state, action) {
      state = action.payload;
    },
    updateEmployee(state, action) {},
    deleteEmployee(state, action) {},
  },
});

// Action creators are generated for each case reducer function
export const { createEmployee, updateEmployee, deleteEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
