import createEmployeeReducer from "./createEmployee";
import modalReducer from "./displayModal";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: createEmployeeReducer,
  displayModal: modalReducer,
});

export default allReducers;
