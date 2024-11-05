import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import EditNameForm from "./EditName";

const UserHeader = ({ userName, firstName, lastName }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentUserName, setCurrentUserName] = useState(userName);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCancelModal = () => {
    setShowModal(false);
  };

  const handleSaveUserName = (newUserName) => {
    console.log("Username saved:", newUserName);
    setCurrentUserName(newUserName);
    setShowModal(false);
  };

  return (
    <div className={`header ${showModal ? "large" : "small"}`}>
      {showModal ? (
        <Modal show={showModal} handleCancel={handleCancelModal}>
          <EditNameForm
            currentUserName={currentUserName}
            currentFirstName={firstName}
            currentLastName={lastName}
            handleSave={handleSaveUserName}
            handleCancel={handleCancelModal}
          />
        </Modal>
      ) : (
        <div>
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <button className="edit-button" onClick={handleOpenModal}>
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
};

UserHeader.propTypes = {
  userName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default UserHeader;
