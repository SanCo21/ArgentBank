import React from "react";

// Adding a visual class to the input wrapper when the input is valid
const InputWrapper = ({ label, type, id, value, onChange, isValid }) => {
  return (
    <div className={`input-wrapper ${isValid ? "valid" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default InputWrapper;
