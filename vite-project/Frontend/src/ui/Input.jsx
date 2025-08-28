import React from "react";

export const Input = ({
  divclassName = "",
  label,
  helperText,
  required,
  error,
  icon,
  className = "",
  ...props
}) => {
  return (
    <div className="form-group mb-3">
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="text-danger">*</span>}
        </label>
      )}
      <div className="position-relative">
        {icon && (
          <div
            className="position-absolute top-50 start-0 translate-middle-y ms-3"
            style={{ zIndex: 10 }}
          >
            {icon}
          </div>
        )}
        <input
          className={`form-control rounded-3 backgroundcolor ${
            icon ? "px-5" : ""
          } ${className}`}
          {...props}
          aria-describedby="emailHelp"
        />
      </div>
      {helperText && !error && (
        <p className="form-text text-danger d-none">{helperText}</p>
      )}
      {error && <p className="text-danger fs-6">{error.message}</p>}
    </div>
  );
};
