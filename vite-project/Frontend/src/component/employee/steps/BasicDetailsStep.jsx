import React, { useEffect, useState } from "react";
import { Input } from "../../../ui/Input";
import { Select } from "../../../ui/Select";
import "../../../assets/css/main.css";
import { toast, ToastContainer } from "react-toastify";

export const BasicDetailsStep = ({ register, errors }) => {
  const [selectedImage, setSelectedImage] = useState(
    "../../../../assets/image/employee.svg"
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage("../assets/img/employee.svg");
    const fileInput = document.getElementById("employeeImg");
    console.log(fileInput.value);

    if (fileInput) {
      fileInput.value = selectedImage;
    }
  };

  useEffect(() => {
    if (errors?.file) {
      toast.error("Please upload an image file.");
    }
  }, [errors?.file]);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const bloodGroupOptions = [
    { value: "a+", label: "A+" },
    { value: "a-", label: "A-" },
    { value: "b+", label: "B+" },
    { value: "b-", label: "B-" },
    { value: "o+", label: "O+" },
    { value: "o-", label: "O-" },
    { value: "ab+", label: "AB+" },
    { value: "ab-", label: "AB-" },
  ];

  const statusOptions = [
    { value: "current", label: "Current" },
    { value: "resigned", label: "Resigned" },
    { value: "ex-employee", label: "Ex-Employee" },
    { value: "transfer", label: "Transfer" },
    { value: "terminated", label: "Terminated" },
  ];

  const maritalStatusOptions = [
    { value: "married", label: "Married" },
    { value: "unmarried", label: "Unmarried" },
  ];

  const skilltypeOptions = [
    { value: "Unskilled", label: "unskilled" },
    { value: "Semi-Skilled", label: "semi-skilled" },
    { value: "Skilled", label: "skilled" },
    { value: "Highly Skilled", label: "highlyskilled" },
  ];

  return (
    <div
      className="tab-pane fade show active"
      id="pills-BasicDetails"
      role="tabpanel"
      aria-labelledby="pills-BasicDetails-tab"
      tabIndex={0}
    >
      <div className="row">
        <div className="col-12">
          <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
            Normal Details
          </h4>
        </div>
        <div className="col-12">
          <div className="form-group mb-3">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="mb-3">
                      <label
                        htmlFor="employeeImg"
                        className="form-label label-img position-relative"
                      >
                        <img src={selectedImage} alt="employee" />

                        <button
                          className="btn btn-outline-danger rounded-circle position-absolute top-0 end-0 py-2"
                          type="button"
                          onClick={handleRemoveImage}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </label>
                      <Input
                        className="form-control d-none"
                        type="file"
                        id="employeeImg"
                        {...register("file", {
                          required: true,
                          onChange: handleImageChange,
                        })}
                        required
                        error={!!errors?.file}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="First name"
                  {...register("firstName", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Please enter only alpha characters",
                    },
                  })}
                  required
                  error={errors.firstName}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Input
                  type="text"
                  label="Last Name"
                  placeholder="Last name"
                  id="LastName"
                  {...register("lastName", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Please enter only alpha characters",
                    },
                  })}
                  required
                  error={errors.lastName}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Select
                  label="Gender"
                  {...register("gender", { required: true })}
                  required
                  error={!!errors?.gender}
                  options={genderOptions}
                  placeholder="Select Gender"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Input
                  label="Email"
                  type="email"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message: "Email must be a valid email address",
                    },
                  })}
                  error={errors.email}
                  required
                  placeholder="Enter Email"
                  id="email"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Input
                  label="Mobile Number"
                  type="number"
                  placeholder="Mobile No."
                  id="MobileNO"
                  {...register("contectNumber", {
                    required: "This field is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter a 10-digit mobile number",
                    },
                  })}
                  required
                  error={errors.contectNumber}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Input
                  label="Date of Birth"
                  type="date"
                  id="Datebirth"
                  placeholder="**|**|****"
                  {...register("dob", { required: "This field is required" })}
                  required
                  error={errors.dob}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Input
                  label="Father's Name"
                  type="text"
                  placeholder="Father name"
                  id="FatherName"
                  {...register("fatherName", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Please enter only alpha characters",
                    },
                  })}
                  required
                  error={errors.fatherName}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Input
                  label="Mother's Name"
                  type="text"
                  placeholder="mother name"
                  id="MotherName"
                  {...register("motherName", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Please enter only alpha characters",
                    },
                  })}
                  required
                  error={errors.motherName}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Input
                  label="Joining Date"
                  type="date"
                  placeholder="Joining Date"
                  id="joinDate"
                  {...register("joiningDate", {
                    required: "This field is required",
                  })}
                  required
                  error={errors.joiningDate}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Select
                  label="Blood Group"
                  {...register("bloodGroup", { required: true })}
                  required
                  error={!!errors?.bloodGroup}
                  options={bloodGroupOptions}
                  placeholder="Select Blood Group"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Select
                  label="Status"
                  {...register("status", { required: true })}
                  required
                  error={!!errors?.status}
                  options={statusOptions}
                  placeholder="Select Status"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Select
                  label="Marital Status"
                  {...register("maritalStatus", { required: true })}
                  required
                  error={!!errors?.maritalStatus}
                  options={maritalStatusOptions}
                  placeholder="Select Marital Status"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <Select
                  label="Skill Type"
                  {...register("skilltype", { required: true })}
                  required
                  error={!!errors?.skilltype}
                  options={skilltypeOptions}
                  placeholder="Select Skill Types"
                />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};
