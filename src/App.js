import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeAdd from "./Pages/EmployeeAdd";
import EmployeeList from "./Pages/EmployeeList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeAdd />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
