import React from "react";
import { Input } from "../../../ui/Input";
import "../../../assets/css/main.css";

export const AdvanceDetailsStep = ({ register, errors }) => {
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
            Advance Details
          </h4>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Input
            label="Aadhar Number"
            {...register("advanceDetails.aadharNumber", {
              required: "This field is required",
              pattern: {
                value: /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/,
                message: "Please enter right Aadhar number",
              },
            })}
            required
            error={errors.advanceDetails?.aadharNumber}
            placeholder="Aadhar Number"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Input
            label="PAN Number"
            {...register("advanceDetails.panNumber", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                message: "Enter right PAN number",
              },
            })}
            required
            error={errors.advanceDetails?.panNumber}
            placeholder="PAN Number"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Input
            label="UAN no."
            placeholder=" UAN no."
            {...register("advanceDetails.uanNumber", {
              required: "This field is required",
              pattern: {
                value: /^[0-9]{12}$/,
                message: "Please enter a 12-digit UAN number",
              },
            })}
            required
            error={errors.advanceDetails?.uanNumber}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Input
            label="ESIC Number"
            {...register("advanceDetails.esicNumber", {
              required: "This field is required",
              pattern: {
                value: /^[0-9]{17}$/,
                message: "Please enter a 17-digit ESIC number",
              },
            })}
            required
            error={errors.advanceDetails?.esicNumber}
            placeholder="Enter ESIC Number"
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <Input
            label="PF Number"
            {...register("advanceDetails.pfNumber", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z]{2}[A-Z]{3}[0-9]{7}[0-9]{7}$/,
                message: "Please enter valid PF Number",
              },
            })}
            required
            error={errors.advanceDetails?.pfNumber}
            placeholder="PF Number"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Input
            label="Insurance Number"
            {...register("advanceDetails.insuranceNumber", {
              required: "This field is required",
            })}
            required
            error={errors.advanceDetails?.insuranceNumber}
            placeholder="Enter Insurance Number"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Input
            label="Driving License No."
            {...register("advanceDetails.drivingLicenseNumber", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z]{2}[0-9]{2}(19|20)[0-9]{2}[0-9]{7}$/,
                message: "Please enter right driving license number",
              },
            })}
            required
            error={errors.advanceDetails?.drivingLicenseNumber}
            placeholder="Driving License No."
          />
        </div>
      </div>
    </div>
  );
};
