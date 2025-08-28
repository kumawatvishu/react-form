import React from "react";
import { Select } from "../../../ui/Select";
import { Input } from "../../../ui/Input";

export const NomineeDetailsStep = ({ register, errors }) => {
  const relation = [
    { value: "father", label: "Father" },
    { value: "mother", label: "Mother" },
    { value: "brother", label: "Brother" },
    { value: "sister", label: "Sister" },
    { value: "spouse", label: "Spouse" },
    { value: "son", label: "Son" },
    { value: "daughter", label: "Daughter" },
    { value: "uncle", label: "Uncle" },
    { value: "aunt", label: "Aunt" },
    { value: "grandfather", label: "GrandFather" },
    { value: "grandmother", label: "GrandMother" },
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
            Family Details
          </h4>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Select
            label="Relation Type "
            {...register("NomineeDetails.relation", { required: true })}
            options={relation}
            placeholder="Select Relation Type"
            required
            error={!!errors?.NomineeDetails?.relation}
          />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <Input
            label="Nominee Name"
            type="text"
            placeholder="Enter Name"
            {...register("NomineeDetails.nomineeName", { required: true })}
            required
            error={!!errors?.NomineeDetails?.nomineeName}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Input
            label="Phone No."
            type="Number"
            placeholder="Enter Number"
            {...register("NomineeDetails.phoneNumber", { required: true })}
            required
            error={!!errors?.NomineeDetails?.phoneNumber}
          />
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        <Input
          label="Date of Birth"
          type="date"
          id="Datebirth"
          placeholder="**|**|****"
          {...register("NomineeDetails.dob", { required: true })}
          required
          error={!!errors?.NomineeDetails?.dob}
        />
      </div>
    </div>
  );
};

export default NomineeDetailsStep;
