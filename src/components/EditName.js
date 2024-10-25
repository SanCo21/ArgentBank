import React, { useState } from 'react';

const EditNameForm = ({ currentUserName, currentFirstName, currentLastName, handleSave, handleCancel}) => {
    const [userName, setUserName] = useState(currentUserName);
    const [firstName, setFirstName] = useState(currentFirstName);
    const [lastName, setLastName] = useState(currentLastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(firstName, lastName);
  };

  return (
    <section className="edit-form-content">
      <h3>Edit user info</h3>
        <form onSubmit={handleSubmit} className="edit-form">
            <div className="edit-input-wrapper">
                <label htmlFor="userName">User name:</label>
                <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div className="edit-input-wrapper">
                <label htmlFor="firstName">First name:</label> {/* Displaying read-only */}
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    disabled
                    // onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="edit-input-wrapper">
                <label htmlFor="lastName">Last name:</label> {/* Displaying read-only */}
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
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

export default EditNameForm;