// indicate the type of action being performed.
export const EMPLOYEE_CREATED = "EMPLOYEE_CREATED";

const initialState = {
  //
};

// Set a state default value
const createEmployeeReducer = (state = initialState, action) => {
  // The reducer looks at the action type field to decide what happens
  switch (action.type) {
    // Do something based on the different types of actions
    case EMPLOYEE_CREATED:
      console.log("action", action);
      return {
        // copy data and update the copy
        ...state,
        //
      };
    default:
      return state;
  }
};
export default createEmployeeReducer;
