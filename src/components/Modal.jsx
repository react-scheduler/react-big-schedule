// Modal.js
import React from "react";

const Modal = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={close}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
