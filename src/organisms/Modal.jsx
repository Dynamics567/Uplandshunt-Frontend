import React from "react";

const Modal = ({ showModal = false, children, handleClose }) => {
  //   if (!props.show) {
  //     return null;
  //   }

  return (
    <>
      {showModal ? (
        <div className="z-10 fixed left-0 top-0 right-0 bottom-0 modalBg flex items-center justify-center">
          <div className="w-3/4 bg-white shadow-md p-10 rounded-md">
            {children}
          </div>

          <div className="modal-footer">
            <button className="bg-primary" onClick={handleClose}>
              close
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export { Modal };
