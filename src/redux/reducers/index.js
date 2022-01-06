import createEmployeeReducer from "./createEmployee";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: createEmployeeReducer,
});

export default allReducers;
