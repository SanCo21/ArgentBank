import React from 'react';
import PropTypes from 'prop-types'

const CheckboxWrapper = ({ label, id }) => {
  return (
    <div className="input-remember">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

CheckboxWrapper.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};
  
export default CheckboxWrapper;