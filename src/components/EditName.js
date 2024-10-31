import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserName } from "../reducers/userReducer";

const EditNameForm = ({
    currentUserName,
    currentFirstName,
    currentLastName,
    handleSave,
    handleCancel,
}) => {
    const [userName, setUserName] = useState(currentUserName);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSave(userName);
        dispatch(updateUserName(userName)); // Update the user name in the Redux store
    };

    return (
        <section className="modal">
        <h2>Edit user info</h2>
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
            <input
                type="text"
                value={currentFirstName}
                disabled
                // onChange={(e) => setFirstName(e.target.value)}
            />
            </div>
            <div className="edit-input-wrapper">
            <label>Last name:</label> {/* Displaying read-only */}
            <input
                type="text"
                value={currentLastName}
                disabled
                // onChange={(e) => setLastName(e.target.value)}
            />
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

// EditNameForm.propTypes = {
//   // currentUserName: PropTypes.string.isRequired,
//   currentFirstName: PropTypes.string.isRequired,
//   currentLastName: PropTypes.string.isRequired,
//   handleSave: PropTypes.func.isRequired,
//   handleCancel: PropTypes.func.isRequired,
// };

export default EditNameForm;
