// indicate the type of action being performed.
export const SHOWMODAL = "SHOWMODAL";
export const HIDEMODAL = "HIDEMODAL";

const initialState = {
  show: false,
};

// Set a state default value
const createEmployeeReducer = (state = initialState, action) => {
  // The reducer looks at the action type field to decide what happens
  switch (action.type) {
    // Do something based on the different types of actions
    case SHOWMODAL:
      return {
        // copy data and update the copy
        ...state,
        show: true,
      };
    case HIDEMODAL:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};
export default createEmployeeReducer;
