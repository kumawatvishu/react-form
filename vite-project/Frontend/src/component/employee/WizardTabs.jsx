import React from "react";

const WizardTabs = ({
  steps,
  userCreated,
  setCurrentStep,
  currentStep,
  handleNextStep,
}) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="wizard-tabs">
          <ul className="nav nav-pills">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      currentStep === step.id ? " active" : ""
                    }`}
                    onClick={() =>
                      handleNextStep(step.id, userCreated, setCurrentStep)
                    }
                    type="button"
                  >
                    <h6>Step {step.id}</h6>
                    <h5>{step.title}</h5>
                  </button>
                </li>
                {index < steps.length - 1 && (
                  <li className="nav-item">
                    <div className="border-top-item" />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WizardTabs;
