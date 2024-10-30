import React from 'react';

const Modal = ({ show, handleCancel, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        {/* <button type="button" onClick={handleCancel}>
            Cancel
        </button> */}
      </section>
    </div>
  );
};

export default Modal;