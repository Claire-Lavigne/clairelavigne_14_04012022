import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
// import EmployeeTable from "../Components/Table";

const EmployeeList = () => {
  const allEmployees = useSelector((state) => state.employees.user);
  return (
    <>
      <div id="employee-div" className="container">
        <Typography
          component="h1"
          variant="h2"
          sx={{ my: "1rem" }}
          align="center"
        >
          Current Employees
        </Typography>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <div
          id="employee-table_wrapper"
          className="dataTables_wrapper no-footer"
        >
          <div className="dataTables_length" id="employee-table_length">
            <label>
              Show
              <select
                name="employee-table_length"
                aria-controls="employee-table"
                className=""
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              entries
            </label>
          </div>
          <div id="employee-table_filter" className="dataTables_filter">
            <label>
              Search:
              <input
                type="search"
                className=""
                placeholder=""
                aria-controls="employee-table"
              />
            </label>
          </div>
          <table
            id="employee-table"
            className="display dataTable no-footer"
            role="grid"
            aria-describedby="employee-table_info"
          >
            <thead>
              <tr role="row">
                <th
                  className="sorting_asc"
                  tabindex="0"
                  aria-controls="employee-table"
                  rowspan="1"
                  colspan="1"
                  aria-sort="ascending"
                  aria-label="First Name: activate to sort column descending"
                >
                  ID
                </th>
                <th
                  className="sorting_asc"
                  tabindex="0"
                  aria-controls="employee-table"
                  rowspan="1"
                  colspan="1"
                  aria-sort="ascending"
                  aria-label="First Name: activate to sort column descending"
                >
                  First Name
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="employee-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Last Name: activate to sort column ascending"
                >
                  Last Name
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="employee-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Start Date: activate to sort column ascending"
                >
                  Start Date
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="employee-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Department: activate to sort column ascending"
                >
                  Department
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="employee-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Date of Birth: activate to sort column ascending"
                >
                  Date of Birth
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="employee-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Street: activate to sort column ascending"
                >
                  Street
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="employee-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="City: activate to sort column ascending"
                >
                  City
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="employee-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="State: activate to sort column ascending"
                >
                  State
                </th>
                <th
                  className="sorting"
                  tabindex="0"
                  aria-controls="employee-table"
                  rowspan="1"
                  colspan="1"
                  aria-label="Zip Code: activate to sort column ascending"
                >
                  Zip Code
                </th>
              </tr>
            </thead>
            <tbody>
              {allEmployees.map((user, i) => (
                <tr key={i} role="row" className="odd">
                  <td>{i}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.startdate}</td>
                  <td>{user.department}</td>
                  <td>{user.birthdate}</td>
                  <td>{user.street}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                  <td>{user.zipcode}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className="dataTables_info"
            id="employee-table_info"
            role="status"
            aria-live="polite"
          >
            Showing 1 to 4 of 4 entries
          </div>
          <div
            className="dataTables_paginate paging_simple_numbers"
            id="employee-table_paginate"
          >
            <a
              href
              className="paginate_button previous disabled"
              aria-controls="employee-table"
              data-dt-idx="0"
              tabindex="-1"
              id="employee-table_previous"
            >
              Previous
            </a>
            <span>
              <a
                href
                className="paginate_button current"
                aria-controls="employee-table"
                data-dt-idx="1"
                tabindex="0"
              >
                1
              </a>
            </span>
            <a
              href
              className="paginate_button next disabled"
              aria-controls="employee-table"
              data-dt-idx="2"
              tabindex="-1"
              id="employee-table_next"
            >
              Next
            </a>
          </div>
        </div>
        {/* <EmployeeTable /> */}
      </div>
    </>
  );
};

export default EmployeeList;
