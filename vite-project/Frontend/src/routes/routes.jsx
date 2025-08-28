import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import NotFound from "../pages/NotFound";
import { Home } from "../pages/Home";
import EmployeeForms from "../component/employee/EmployeeForms";
import EmployeeDetails from "../component/employeesDetails/EmployeeDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="employee/add" element={<EmployeeForms />} />
        <Route path="edit-employee/:id" element={<EmployeeForms />} />
        <Route path="employee-detail/:id" element={<EmployeeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
