export const getValueByLabel = (label, userData) => {
  console.log("getvalue", userData);
  console.log("label", label);

  if (!userData) return "N/A";

  const labelMap = {
    Name: `${userData?.firstName || ""} ${userData.lastName || ""}`.trim(),
    Gender: userData?.gender || "N/A",
    Email: userData?.email || "N/A",
    Contact: userData?.contectNumber || "N/A",
    "Date of Birth": userData?.dob || "N/A",
    "Father Name": userData?.fatherName || "N/A",
    "Mother Name": userData?.motherName || "N/A",
    "Joining Date": userData?.joiningDate || "N/A",
    "Blood Group": userData?.bloodGroup || "N/A",
    Status: userData?.status || "N/A",
    "Marital Status": userData?.maritalStatus || "N/A",
    "Skill Type": userData?.skilltype || "N/A",
    "Employee Type": userData.permission?.employeeType || "N/A",
    Department: userData.permission?.department || "N/A",
    "designation Name": userData.permission?.designation || "N/A",
    Shift: userData.permission?.shift || "N/A",
    "Site Type": userData.permission?.siteType || "N/A",
    "Assigned Site": userData.permission?.site || "N/A",
    "UAN No": userData.advanceDetails?.uanNumber || "N/A",
    "Aadhar Card No": userData.advanceDetails?.aadharNumber || "N/A",
    "PAN Number": userData.advanceDetails?.panNumber || "N/A",
    "ESIC Number": userData.advanceDetails?.esicNumber || "N/A",
    "Insurance Number": userData.advanceDetails?.insuranceNumber || "N/A",
    "PF Number": userData.advanceDetails?.pfNumber || "N/A",
    "Driving License No":
      userData.advanceDetails?.drivingLicenseNumber || "N/A",
    Address: userData.presentAddress?.address || "N/A",
    State: userData.presentAddress?.state || "N/A",
    City: userData.presentAddress?.city || "N/A",
    "Post Code": userData.presentAddress?.pinCode || "N/A",
    "Address ": userData.permanentAddress?.address || "N/A",
    "State ": userData.permanentAddress?.state || "N/A",
    "City ": userData.permanentAddress?.city || "N/A",
    "Post Code ": userData.permanentAddress?.pinCode || "N/A",
    "Relation Type": userData.NomineeDetails?.relation || "N/A",
    "Name ": userData.NomineeDetails?.nomineeName || "N/A",
    "Phone No.": userData.NomineeDetails?.phoneNumber || "N/A",
    "Date of Birth ": userData.NomineeDetails?.dob || "N/A",
  };

  return labelMap[label] || "N/A";
};
