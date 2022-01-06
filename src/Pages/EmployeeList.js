import React from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  return (
    <>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display"></table>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </>
  );
};

export default EmployeeList;
