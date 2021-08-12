import React from "react";

const Modal = ({
  showModal = false,
  children,
  handleClose,
  modalTitle,
  showButton = true,
}) => {
  return (
    <>
      {showModal ? (
        <div className="z-10 fixed left-0 top-0 right-0 bottom-0 modalBg flex items-center justify-center">
          <div className="w-3/4 bg-white shadow-md p-4 rounded-md">
            <div className="mb-4 flex justify-center items-center">
              <p className="font-bold text-2xl text-center">{modalTitle}</p>
              {showButton && (
                <div className="justify-self-end">
                  <p
                    className="bg-black rounded-full p-2 text-white h-8 w-8 flex items-center justify-center cursor-pointer"
                    onClick={handleClose}
                  >
                    X
                  </p>
                </div>
              )}
            </div>
            {children}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export { Modal };
