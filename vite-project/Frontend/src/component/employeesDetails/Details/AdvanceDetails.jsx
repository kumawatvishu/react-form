import React, { useEffect, useState } from "react";
import { Ul } from "../../../ui/Ul";

export const AdvanceDetails = ({ employee }) => {
  const [userData, setUserData] = useState(employee);
  console.log("this page is render", employee);

  const labels = [
    "UAN No",
    "Aadhar Card No",
    "PAN Number",
    "ESIC Number",
    "Insurance Number",
    "PF Number",
    "Driving License No",
  ];

  return (
    <div className="card-body">
      <div className="d-flex align-items-center justify-content-between border-bottom mb-3">
        <h3 className="d-flex align-items-center mb-4">Advance Details</h3>
      </div>
      {!userData ? (
        <div className="text-center py-4">
          <p className="text-muted mb-0">Loading...</p>
        </div>
      ) : (
        <Ul labels={labels} userData={userData} />
      )}
    </div>
  );
};

export default AdvanceDetails;
