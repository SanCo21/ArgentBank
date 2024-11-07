import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../reducers/userSlice";
import { updateUserNameAPI } from "../API/userService";

const EditNameForm = ({
  currentUserName,
  currentFirstName,
  currentLastName,
  handleSave,
  handleCancel,
}) => {
  const [userName, setUserName] = useState(currentUserName);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userName.trim() === "") {
      setError("User name cannot be empty");
      return;
    }
    try {
      // Call API to update user name
      await updateUserNameAPI(token, userName);
      // Update user name in Redux store
      dispatch(updateUserName(userName));
      handleSave(userName);
      setError("");
    } catch (error) {
      console.error("Failed to update user name:", error);
      setError("Failed to update user name. Please try again.");
    }
  };

  return (
    <section className="modal">
      <h2>Edit user info</h2>
      {error && <span className="error-message">{error}</span>}
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="edit-input-wrapper">
          <label>User name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="edit-input-wrapper">
          <label> First name:</label> {/* Displaying read-only */}
          <input type="text" value={currentFirstName} disabled />
        </div>
        <div className="edit-input-wrapper">
          <label>Last name:</label> {/* Displaying read-only */}
          <input type="text" value={currentLastName} disabled />
        </div>
        <div className="button-group">
          <button type="submit" className="modal-button">
            Save
          </button>
          <button type="button" onClick={handleCancel} className="modal-button">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};

EditNameForm.propTypes = {
  currentUserName: PropTypes.string.isRequired,
  currentFirstName: PropTypes.string.isRequired,
  currentLastName: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default EditNameForm;
