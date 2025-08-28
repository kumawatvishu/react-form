import React from "react";

export const Textarea = ({
  label,
  error,
  required,
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
      <textarea
        className={`
         form-control rounded-3 backgroundcolor
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-danger fs-6">This field is required</p>}
    </div>
  );
};
