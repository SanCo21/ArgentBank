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
    <div className="header">
      <h1>Welcome back<br />{firstName} {lastName}!</h1>
      <button className="edit-button" onClick={handleOpenModal}>Edit Name</button>
      <Modal show={showModal} handleCancel={handleCancelModal}>
        <EditNameForm 
        currentUserName={currentUserName}
        currentFirstName={firstName} 
        currentLastName={lastName} 
        handleSave={handleSaveUserName} 
        handleCancel={handleCancelModal}  
        />
      </Modal>
    </div>
  );
};

// UserHeader.propTypes = {
//   username: PropTypes.string.isRequired
// };

export default UserHeader;
