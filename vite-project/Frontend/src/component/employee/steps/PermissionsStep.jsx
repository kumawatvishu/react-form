import React from "react";
import { Select } from "../../../ui/Select";
import "../../../assets/css/main.css";
import { ToastContainer } from "react-toastify";

function PermissionsStep({ register, errors }) {
  const employeeTypeOptions = [
    { value: "site-staff", label: "Site Staff" },
    { value: "office-staff", label: "Office Staff" },
  ];

  const siteTypeOptions = [
    { value: "om", label: "O&M" },
    { value: "project", label: "Project" },
    { value: "both", label: "Both" },
  ];

  const departmentOptions = [
    { value: "om", label: "O&M" },
    { value: "project", label: "Project" },
    { value: "hr", label: "HR" },
    { value: "accounts", label: "Accounts" },
    { value: "store", label: "Store" },
    { value: "scm", label: "SCM" },
  ];

  const designationOptions = [
    { value: "helper", label: "Helper" },
    { value: "technician", label: "Technician" },
    { value: "sr-technician", label: "Sr. Technician" },
    { value: "lead-engineer", label: "Lead Engineer" },
    { value: "engineer", label: "Engineer" },
    { value: "sr-engineer", label: "Sr. Engineer" },
    { value: "plant-head", label: "Plant Head" },
    { value: "zonal-head", label: "Zonal Head" },
    { value: "store-incharge", label: "Store Incharge" },
  ];

  const siteOptions = [
    { value: "omkareshwer-88mw", label: "88 MW OMKARESHWER +1..." },
    { value: "bhainsara-160mw", label: "160 MW BHAINSARA" },
    { value: "rawra-55mw", label: "55 MW RAWRA" },
  ];

  const shiftOptions = [
    { value: "general", label: "General Shift" },
    { value: "morning", label: "Morning Shift" },
    { value: "evening", label: "Evening Shift" },
    { value: "night", label: "Night Shift" },
  ];

  return (
    <div
      className="tab-pane fade show active"
      id="pills-BasicDetails"
      role="tabpanel"
      aria-labelledby="pills-BasicDetails-tab"
      tabIndex={0}
    >
      <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
        Permission
      </h4>
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6 col-lg-4">
          <Select
            label="Employee Type"
            {...register("permission.employeeType", { required: true })}
            required
            error={!!errors?.permission?.employeeType}
            options={employeeTypeOptions}
            placeholder="Select Employee Type"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Select
            label="Site Type"
            {...register("permission.siteType", { required: true })}
            required
            error={!!errors?.permission?.siteType}
            options={siteTypeOptions}
            placeholder="Select Site Type"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Select
            label="Department"
            {...register("permission.department", { required: true })}
            required
            error={!!errors?.permission?.department}
            options={departmentOptions}
            placeholder="Select Department"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Select
            label="Designation"
            {...register("permission.designation", { required: true })}
            required
            error={!!errors?.permission?.designation}
            options={designationOptions}
            placeholder="Select Designation"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Select
            label="Site"
            {...register("permission.site", { required: true })}
            required
            error={!!errors?.permission?.site}
            options={siteOptions}
            placeholder="Select Site"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Select
            label="Shift"
            {...register("permission.shift", { required: true })}
            required
            error={!!errors?.permission?.shift}
            options={shiftOptions}
            placeholder="Select Shift"
          />
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default PermissionsStep;
