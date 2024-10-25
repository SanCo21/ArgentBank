// import PropTypes from 'prop-types';

// const UserHeader = ({ username }) => (
//   <div className="header">
//     <h1>Welcome back<br />{username}!</h1>
//     <button className="edit-button">Edit Name</button>
//   </div>
// );

// UserHeader.propTypes = {
//   username: PropTypes.string.isRequired
// };

// export default UserHeader;

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Modal from './Modal';
import EditNameForm from './EditName';

const UserHeader = ({ firstName, lastName, userName }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCancelModal = () => {
    setShowModal(false);
  };

  const handleSaveName = (newFirstName, newLastName) => {
    console.log("Name saved:", newFirstName, newLastName);
    setShowModal(false);
  };

  return (
    <div className="header">
      <h1>Welcome back<br />{firstName} {lastName}!</h1>
      <button className="edit-button" onClick={handleOpenModal}>Edit Name</button>
      <Modal show={showModal} handleClose={handleCancelModal}>
        <EditNameForm 
        currentUserName={userName}
        currentFirstName={firstName} 
        currentLastName={lastName} 
        handleSave={handleSaveName} 
        handleClose={handleCancelModal}  />
      </Modal>
    </div>
  );
};

// UserHeader.propTypes = {
//   username: PropTypes.string.isRequired
// };

export default UserHeader;
