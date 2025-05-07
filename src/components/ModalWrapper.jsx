import React from 'react';

const ModalWrapper = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-[#6a64647a] z-[3]"
        onClick={onClose}
      />
      <div className="fixed z-[4] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </>
  );
};

export default ModalWrapper;
