import React from "react";
import { BasicDetailsStep } from "./BasicDetailsStep";
import PermissionsStep from "./PermissionsStep";
import { AdvanceDetailsStep } from "./AdvanceDetailsStep";
import { AddressStep } from "./AdressStep";
import { BankDetailsStep } from "./BankDetailsStep";
import NomineeDetailsStep from "./NomineeDetailsStep";

const WizardStepContent = ({ currentStep, register, errors }) => {
  return (
    <div className="tab-content">
      {currentStep === 1 && (
        <BasicDetailsStep register={register} errors={errors} />
      )}
      {currentStep === 2 && (
        <PermissionsStep register={register} errors={errors} />
      )}
      {currentStep === 3 && (
        <AdvanceDetailsStep register={register} errors={errors} />
      )}
      {currentStep === 4 && <AddressStep register={register} errors={errors} />}
      {currentStep === 5 && (
        <BankDetailsStep register={register} errors={errors} />
      )}
      {currentStep === 6 && (
        <NomineeDetailsStep register={register} errors={errors} />
      )}
    </div>
  );
};

export default WizardStepContent;
