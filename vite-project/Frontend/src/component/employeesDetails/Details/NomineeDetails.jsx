import React, { useEffect, useState } from "react";
import { Ul } from "../../../ui/Ul";

const NomineeDetails = ({ employee }) => {
  const [userData, setUserData] = useState(employee);
  console.log("this page is render");

  console.log("data of permission", userData);

  const labels = ["Relation Type", "Name ", "Phone No.", "Date of Birth "];

  return (
    <div className="card-body">
      <div className="d-flex align-items-center justify-content-between border-bottom mb-3">
        <h3 className="d-flex align-items-center mb-4">Nominee Details</h3>
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

export default NomineeDetails;
