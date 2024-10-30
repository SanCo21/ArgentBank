import PropTypes from 'prop-types';

const InputWrapper = ({ label, type, id }) => {
    return (
      <div className="input-wrapper">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} />
      </div>
    );
  };
  
InputWrapper.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};
  export default InputWrapper