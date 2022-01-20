import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    user: [],
  },
  reducers: {
    addEmployee(state, action) {
      state.user = [...state.user, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
