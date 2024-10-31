import React from 'react';

const CheckboxWrapper = ({ label, id, checked, onChange }) => {
  return (
    <div className="input-remember">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckboxWrapper;
