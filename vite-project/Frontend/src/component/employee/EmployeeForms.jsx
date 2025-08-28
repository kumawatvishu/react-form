import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import HeadingItems from "../PageHeader/HeadingItems";
import { FaArrowLeft } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import {
  handleNext,
  handleNextStep,
  handlePrevious,
  steps,
} from "../../helper/hendleSteps";
import { setNestedValues } from "../../helper/SetNestedValues";
import WizardTabs from "./WizardTabs";
import WizardStepContent from "./steps/WizardStepContent";

const EmployeeForms = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userCreated, setUserCreated] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
    watch,
  } = useForm({});

  const formValues = watch();
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const stateUser = location.state?.userData;

  useEffect(() => {
    if (id) {
      if (stateUser) {
        setNestedValues(stateUser, setValue);
        setIsEditMode(true);
        setUserCreated(true);
        setCurrentUserId(id);
      } else {
        fetch(`http://localhost:5000/api/users/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setNestedValues(data, setValue);
            setIsEditMode(true);
            setUserCreated(true);
            setCurrentUserId(id);
          })
          .catch(() => toast.error("Failed to fetch employee data"));
      }
    }
  }, [id, stateUser, setValue]);

  const onSubmit = async (data) => {
    setSubmitError(null);
    try {
      const url = `http://localhost:5000/api/users/${currentUserId}`;
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Something went wrong!");
      toast.success("User updated successfully!");
      setTimeout(() => navigate("/"), 1200);
    } catch (error) {
      setSubmitError(error.message || "Error while updating user.");
      toast.error(error.message || "Error while updating user.");
    }
  };

  const handleCreateUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) throw new Error("Failed to create user");
      const newUser = await response.json();

      setCurrentUserId(newUser.id);
      setUserCreated(true);
      toast.success("User created! You can now proceed to the next steps.");
      setCurrentStep(currentStep + 1);
    } catch (error) {
      setSubmitError(error.message || "Error while creating user.");
      toast.error(error.message || "Error while creating user.");
    }
  };

  return (
    <div className="main-view-content" id="contentWrapper">
      <HeadingItems
        reversebutton={<FaArrowLeft />}
        navigatetoreverse={"/"}
        heading={isEditMode ? "Edit Employee" : "Add Employee Onboard"}
      />
      <WizardTabs
        steps={steps}
        userCreated={userCreated}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        handleNextStep={handleNextStep}
      />

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <WizardStepContent
              currentStep={currentStep}
              register={register}
              errors={errors}
            />

            <div className="d-flex align-items-center justify-content-end gap-3 mt-4">
              {currentStep > 1 && (
                <button
                  type="button"
                  className="btn btn-secondary px-4"
                  onClick={() => handlePrevious(currentStep, setCurrentStep)}
                >
                  Previous
                </button>
              )}

              {currentStep === 2 && !isEditMode && !userCreated && (
                <button
                  type="button"
                  className="btn btn-success px-4"
                  onClick={handleCreateUser}
                >
                  Create
                </button>
              )}

              {currentStep < steps.length && (
                <button
                  type="button"
                  className="btn btn-primary px-4"
                  onClick={() =>
                    handleNext(currentStep, setCurrentStep, trigger)
                  }
                >
                  Save and Continue
                </button>
              )}

              {currentStep === steps.length && isEditMode && (
                <button type="submit" className="btn btn-success px-4">
                  Update
                </button>
              )}
            </div>
          </form>
          {submitError && <p className="text-danger mt-2">{submitError}</p>}
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default EmployeeForms;
