/*

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

const columns = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "firstname", label: "First Name", minWidth: 170 },
  { id: "lastname", label: "Last Name", minWidth: 170 },
  { id: "birthdate", label: "Date of Birth", minWidth: 170 },
  { id: "startdate", label: "Start Date", minWidth: 170 },
  { id: "department", label: "Department", minWidth: 170 },
  { id: "street", label: "Street", minWidth: 170 },
  { id: "city", label: "City", minWidth: 170 },
  { id: "state", label: "State", minWidth: 170 },
  { id: "zipcode", label: "Zip Code", minWidth: 170 },
];

function createData(
  id,
  firstname,
  lastname,
  birthdate,
  startdate,
  department,
  street,
  city,
  state,
  zipcode
) {
  return {
    id,
    firstname,
    lastname,
    birthdate,
    startdate,
    department,
    street,
    city,
    state,
    zipcode,
  };
}

const rows = [
  createData(
    id,
    firstname,
    lastname,
    birthdate,
    startdate,
    department,
    street,
    city,
    state,
    zipcode
  ),
];

const EmployeeTable = () => {
  const id = useSelector((state) => state.employee.id);
  const firstname = useSelector((state) => state.employee.firstName);
  const lastname = useSelector((state) => state.employee.lastName);
  const birthdate = useSelector((state) => state.employee.birthdate);
  const startdate = useSelector((state) => state.employee.startdate);
  const department = useSelector((state) => state.employee.department);
  const street = useSelector((state) => state.employee.addressStreet);
  const city = useSelector((state) => state.employee.addressCity);
  const state = useSelector((state) => state.employee.addressState);
  const zipcode = useSelector((state) => state.employee.addressZipcode);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default EmployeeTable;

*/