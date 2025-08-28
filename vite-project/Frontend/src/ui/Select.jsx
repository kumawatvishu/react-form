import React from "react";

export const Select = ({
  label,
  error,
  options,
  placeholder,
  required,
  className = "",
  ...props
}) => {
  return (
    <div className="form-group mb-3">
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        aria-label="Default select example "
        className={`form-select form-control rounded-3 backgroundcolor
            ${error ? "border-red-500 focus:ring-red-500" : ""}
            ${className}
          `}
        {...props}
      >
        {placeholder && (
          <option value="" className="d-done">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-danger fs-6">This field is required</p>}
    </div>
  );
};
