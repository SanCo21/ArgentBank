import React from "react";

const InputWrapper = ({ label, type, id, value, onChange, isValid }) => {
  return (
    <div className={`input-wrapper ${isValid ? 'valid' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
      {isValid && <span className="checkmark">✔️</span>}
    </div>
  );
};

export default InputWrapper;
