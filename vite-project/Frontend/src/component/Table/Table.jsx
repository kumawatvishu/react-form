import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Table = ({ headings, data, onEdit, onView, onDelete }) => {
  console.log("table data", data);

  const displayValue = (value) => {
    if (
      value === undefined ||
      value === null ||
      value === "undefined" ||
      value === "null"
    ) {
      return "N/A";
    }
    return value;
  };

  return (
    <div className="manage-table main-table table-responsive">
      <table className="table">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th
                key={index}
                className={index === headings.length - 1 ? "sticky-col" : ""}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((user) => (
              <tr key={user.id}>
                <td>
                  <img
                    src={
                      user.filePath
                        ? `http://localhost:5000/${user.filePath}`
                        : "/assets/image/employee.svg"
                    }
                    alt="employee"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </td>
                <td>{displayValue(user.id)}</td>
                <td>
                  <div className="user">
                    <h4 className="title mb-0 text-capitalize">
                      {displayValue(user.firstName)}{" "}
                      {displayValue(user.lastName)}
                    </h4>
                  </div>
                </td>
                <td>{displayValue(user.contectNumber)}</td>
                <td>{displayValue(user.email)}</td>
                <td>{displayValue(user.joiningDate)}</td>
                <td className="text-uppercase">
                  {displayValue(user.employeDefth)}
                </td>
                <td className="text-uppercase">
                  {displayValue(user.department)}
                </td>
                <td className="text-uppercase">{displayValue(user.shift)}</td>
                <td>
                  <span className="badge bg-green-25 fw-normal rounded-pill text-uppercase">
                    {displayValue(user.status)}
                  </span>
                </td>
                <td className="sticky-col">
                  <div className="action-btns">
                    <button
                      className="btns btn-link"
                      type="button"
                      aria-expanded="false"
                      onClick={() => onView(user)}
                    >
                      <IoEyeOutline size={16} />
                    </button>
                    <button
                      className="btns btn-link"
                      type="button"
                      aria-expanded="false"
                      onClick={() => onEdit(user)}
                    >
                      <BiEdit size={16} />
                    </button>

                    <button
                      className="btns btn-link"
                      type="button"
                      aria-expanded="false"
                      onClick={() => onDelete(user.id)}
                    >
                      <MdDelete size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headings.length} className="text-center py-4">
                <p className="text-muted mb-0">
                  koi data nhi mila! please add employee
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
