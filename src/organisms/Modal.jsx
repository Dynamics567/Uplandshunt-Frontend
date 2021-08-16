import closeButton from "../assets/userDashboard/closeButton.png";

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
          <div className="w-3/4  bg-white shadow-md py-4 px-8 rounded-md">
            <div className="mb-4 flex justify-center items-center">
              <p className="font-bold text-2xl text-center">{modalTitle}</p>
              {showButton && (
                <div className="justify-self-end">
                  <img
                    src={closeButton}
                    alt="closeButton"
                    className="w-8"
                    onClick={handleClose}
                  />
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
