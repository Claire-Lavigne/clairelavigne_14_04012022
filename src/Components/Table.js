import React from "react";
import { useSelector } from "react-redux";
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
/*
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
];*/

const EmployeeTable = () => {
  const allEmployees = useSelector((state) => state.employees.user);
  const rows = [
    allEmployees.map((user) =>
      createData(
        user.id,
        user.firstname,
        user.lastname,
        user.birthdate,
        user.startdate,
        user.department,
        user.street,
        user.city,
        user.state,
        user.zipcode
      )
    ),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(+e.target.value);
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
