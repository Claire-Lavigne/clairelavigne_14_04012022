import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Paper,
  TextField,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

const columns = [
  { id: "id", label: "ID", minWidth: 90 },
  { id: "firstname", label: "First Name", minWidth: 100 },
  { id: "lastname", label: "Last Name", minWidth: 100 },
  { id: "birthdate", label: "Date of Birth", minWidth: 120 },
  { id: "startdate", label: "Start Date", minWidth: 100 },
  { id: "department", label: "Department", minWidth: 120 },
  { id: "street", label: "Street", minWidth: 150 },
  { id: "city", label: "City", minWidth: 90 },
  { id: "state", label: "State", minWidth: 30 },
  { id: "zipcode", label: "Zip Code", minWidth: 90 },
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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const EmployeeTable = () => {
  const allEmployees = useSelector((state) => state.employees.user);

  const rows = allEmployees.map((user) =>
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
  );

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("id");
  const [filteredRows, setFilteredRows] = useState(rows);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  const requestSearch = (e) => {
    if (e) {
      const rowsToShow = rows.filter((row) => {
        let rowArray = Object.values(row);
        return rowArray.some(
          (elt) => elt.toString().toLowerCase().indexOf(e.toLowerCase()) >= 0
        );
      });
      setFilteredRows(rowsToShow);
    } else {
      setFilteredRows(rows);
    }
  };

  return (
    <Paper
      sx={{ width: "75%", overflow: "hidden", margin: "2.5em" }}
      align="center"
    >
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        sx={{ margin: "2em" }}
        onChange={(e) => requestSearch(e.target.value.trim())}
      />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sortDirection={orderBy === column.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={createSortHandler(column.id)}
                  >
                    {column.label}
                    {orderBy === column.id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .sort(getComparator(order, orderBy))
              .map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={`${column.id}-${i}`}
                          align={column.align}
                        >
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
        rowsPerPageOptions={[10, 25, 50, 100]}
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
