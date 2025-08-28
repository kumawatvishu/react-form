import React, { useEffect, useState } from "react";
import PersonalDetails from "./Details/PersonalDetails";
import { FaArrowLeft } from "react-icons/fa";
import HeadingItems from "../PageHeader/HeadingItems";
import { useParams } from "react-router-dom";
import Permission from "./Details/Permission";
import CurrentAddress from "./Details/CurrentAddress";
import PermanentAddress from "./Details/PermanentAddress";
import NomineeDetails from "./Details/NomineeDetails";
import AdvanceDetails from "./Details/AdvanceDetails";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch employee");
        }
        const data = await response.json();
        setEmployee(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployee();
  }, [id]);

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (!employee) {
    return (
      <div className="p-4 text-center text-red-500">Employee not found</div>
    );
  }

  return (
    <div className="main-view-content" id="contentWrapper">
      <div className="content container-fluid">
        <HeadingItems
          reversebutton={<FaArrowLeft />}
          navigatetoreverse={"/"}
          heading="Employee Details"
        />
        <div className="card manage-user-list">
          <PersonalDetails employee={employee} />
        </div>
        <div className="card manage-user-list">
          <Permission employee={employee} />
        </div>
        <div className="card manage-user-list">
          <AdvanceDetails employee={employee} />
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card manage-user-list">
              <CurrentAddress employee={employee} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card manage-user-list">
              <PermanentAddress employee={employee} />
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="card manage-user-list">
              <NomineeDetails employee={employee} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
