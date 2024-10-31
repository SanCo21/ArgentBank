import React from 'react';

const InputWrapper = ({ label, type, id, value, onChange }) => (
  <div className="input-wrapper">
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} value={value} onChange={onChange} />
  </div>
);

export default InputWrapper;
