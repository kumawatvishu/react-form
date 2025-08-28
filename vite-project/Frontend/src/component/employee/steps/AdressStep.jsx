import React from "react";
import { Textarea } from "../../../ui/Textarea";
import { Select } from "../../../ui/Select";
import { Input } from "../../../ui/Input";

export const AddressStep = ({ register, errors }) => {
  const stateOptions = [
    { value: "delhi", label: "Delhi" },
    { value: "rajasthan", label: "Rajasthan" },
    { value: "maharashtra", label: "Maharashtra" },
  ];

  const cityOptions = [
    { value: "bikaner", label: "Bikaner" },
    { value: "jaipur", label: "Jaipur" },
    { value: "delhi", label: "Delhi" },
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
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-12">
              <h4 className="fs-3 rajdhani-semibold my-4 border-bottom pb-3">
                Present Address
              </h4>
            </div>
            <Textarea
              label="Address"
              {...register("presentAddress.address", { required: true })}
              required
              error={!!errors?.presentAddress?.address}
              rows={3}
            />

            <div className="col-12 col-md-6 col-lg-6">
              <Select
                label="State"
                {...register("presentAddress.state", { required: true })}
                required
                error={!!errors?.presentAddress?.state}
                options={stateOptions}
                placeholder="Select State"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <Select
                label="City"
                {...register("presentAddress.city", { required: true })}
                required
                error={!!errors?.presentAddress?.city}
                options={cityOptions}
                placeholder="Enter City"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <Input
                label="Pin Code"
                {...register("presentAddress.pinCode", {
                  required: "This field is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "PIN code must be 6 digits",
                  },
                })}
                required
                error={errors.presentAddress?.pinCode}
                placeholder="Enter Pin Code"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-12">
              <div className="my-4 border-bottom pb-3 d-flex align-items-center justify-content-between">
                <h4 className="fs-3 rajdhani-semibold">Permanent Address</h4>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue={""}
                    id="presentAdd"
                  />
                  <label className="form-check-label" htmlFor="presentAdd">
                    Same as present address
                  </label>
                </div>
              </div>
            </div>
            <Textarea
              label="Address"
              {...register("permanentAddress.address", { required: true })}
              required
              error={!!errors?.permanentAddress?.address}
              rows={3}
            />
            <div className="col-12 col-md-6 col-lg-6">
              <Select
                label="State"
                {...register("permanentAddress.state", { required: true })}
                required
                error={!!errors?.permanentAddress?.state}
                options={stateOptions}
                placeholder="Select State"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <Select
                label="City"
                {...register("permanentAddress.city", { required: true })}
                required
                error={!!errors?.permanentAddress?.city}
                options={cityOptions}
                placeholder="Enter city"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <Input
                label="Pin Code"
                {...register("permanentAddress.pinCode", {
                  required: "This field is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "PIN code must be 6 digits",
                  },
                })}
                required
                error={errors.permanentAddress?.pinCode}
                placeholder="Enter Pin Code"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
