import { toast } from "react-toastify";

export const handleNextStep = (id, userCreated, setCurrentStep) => {
  if (id === 1 || id === 2 || (userCreated && id > 2)) {
    setCurrentStep(id);
  } else {
    toast.error("Please create the user before proceeding to the next step!");
  }
};

export const handlePrevious = (currentStep, setCurrentStep) => {
  if (currentStep > 1) setCurrentStep(currentStep - 1);
};

export const handleNext = async (currentStep, setCurrentStep, trigger) => {
  const stepFields = {
    1: [
      "firstName",
      "middleName",
      "lastName",
      "fatherName",
      "motherName",
      "joiningDate",
      "dob",
      "contectNumber",
      "email",
      "gender",
      "maritalStatus",
      "skilltype",
      "bloodGroup",
      "status",
    ],
    2: [
      "permission.employeeType",
      "permission.siteType",
      "permission.department",
      "permission.designation",
      "permission.shift",
      "permission.site",
    ],
    3: [
      "advanceDetails.uanNumber",
      "advanceDetails.aadharNumber",
      "advanceDetails.esicNumber",
      "advanceDetails.insuranceNumber",
      "advanceDetails.pfNumber",
      "advanceDetails.panNumber",
      "advanceDetails.drivingLicenseNumber",
    ],
    4: [
      "presentAddress.address",
      "presentAddress.state",
      "presentAddress.city",
      "presentAddress.pinCode",
      "permanentAddress.address",
      "permanentAddress.state",
      "permanentAddress.city",
      "permanentAddress.pinCode",
    ],
    5: [
      "bankDetails.branchAddress",
      "bankDetails.accountHolderName",
      "bankDetails.accountNumber",
      "bankDetails.ifscCode",
      "bankDetails.bankName",
    ],
    6: [
      "NomineeDetails.relation",
      "NomineeDetails.nomineeName",
      "NomineeDetails.phoneNumber",
      "NomineeDetails.dob",
    ],
  };

  const fieldsToValidate = stepFields[currentStep];
  if (fieldsToValidate && fieldsToValidate.length > 0) {
    const valid = await trigger(fieldsToValidate);
    if (valid) setCurrentStep(currentStep + 1);
  } else setCurrentStep(currentStep + 1);
};

export const steps = [
  { id: 1, title: "Basic Details" },
  { id: 2, title: "Permissions" },
  { id: 3, title: "Advance Detail" },
  { id: 4, title: "Address" },
  { id: 5, title: "Bank Details" },
  { id: 6, title: "Nominee Details" },
];
