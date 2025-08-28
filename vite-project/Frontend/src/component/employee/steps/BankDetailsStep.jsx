import React from "react";
import { Input } from "../../../ui/Input";
import { Textarea } from "../../../ui/Textarea";

export const BankDetailsStep = ({ register, errors }) => {
  return (
    <div
      className="tab-pane  show active"
      id="pills-BasicDetails"
      role="tabpanel"
      aria-labelledby="pills-BasicDetails-tab"
      tabIndex={0}
    >
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                Bank Details
              </h4>
            </div>

            <div className="col-12 col-md-6 ">
              <Input
                label="Bank Name"
                {...register("bankDetails.bankName", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Za-z0-9 .&'-]{3,50}$/,
                    message:
                      "Bank name should be 3-50 characters and can include letters, numbers, spaces, periods, ampersands (&), hyphens (-), and apostrophes (')",
                  },
                })}
                required
                error={errors.bankDetails?.bankName}
                placeholder="Enter Bank Name"
              />
            </div>

            <div className="col-12 col-md-6 ">
              <Input
                label="Account Number"
                {...register("bankDetails.accountNumber", {
                  required: "This field is required",
                  pattern: {
                    value: /^\d{10,16}$/,
                    message: "Enter 10 to 16 digits only",
                  },
                })}
                required
                error={errors.bankDetails?.accountNumber}
                placeholder="Enter Account Number"
              />
            </div>

            <div className="col-12 col-md-6 ">
              <Input
                label="Account Holder Name"
                {...register("bankDetails.accountHolderName", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Za-z][A-Za-z .'-]{1,48}[A-Za-z]$/,
                    message:
                      "Name must be 3-50 characters long, and can include letters, spaces, periods (.), apostrophes (’), and hyphens (-)",
                  },
                })}
                required
                error={errors.bankDetails?.accountHolderName}
                placeholder="Enter Account Holder Name"
              />
            </div>

            <div className="col-12 col-md-6 ">
              <Input
                label="IFSC/RTGS Code"
                {...register("bankDetails.ifscCode", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z]{4}0[A-Z0-9]{6}$/,
                    message:
                      "Name must be 3-50 characters long, and can include letters, spaces, periods (.), apostrophes (’), and hyphens (-)",
                  },
                })}
                required
                error={errors.bankDetails?.ifscCode}
                placeholder="Enter IFSC/RTGS Code"
              />
            </div>

            <div className="col-12">
              <Textarea
                label="Branch Address"
                {...register("bankDetails.branchAddress", {
                  required: "This field is required",
                })}
                required
                error={!!errors?.bankDetails?.branchAddress}
                placeholder="Enter Branch Address"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
