import { useState } from "react";

import { toast } from "react-toastify";
import { axiosWithAuth } from "../Auth/Axios";
import LoadSpinner from "../templates/LoadSpinner";

const DeleteAccount = () => {
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  const deleteAccount = () => {
    setSpinnerLoading(true);
    axiosWithAuth()
      .delete("account/delete-account")
      .then((response) => {
        console.log(response);
        const successMessage = response.data.data;
        toast.success(successMessage);
        window.location.replace("/register");
      })
      .catch(function (error) {
        if (error.response) {
          setSpinnerLoading(false);
          const errorMessage = error.response.data.data;
          console.log(errorMessage);
          toast.error(errorMessage);
        }
      });
  };
  return (
    <>
      <div className="font-normal text-base">
        <p style={{ color: "#F12B2C" }}>Deleting your account will:</p>
        <p>Delete your account from the system</p>
        <p>Erase all transactions made on the system</p>
        <p className="font-bold text-base py-4">Are you sure?</p>
      </div>
      <div
        className="m-auto w-11/12 flex justify-center items-center"
        onClick={deleteAccount}
      >
        <button
          className="text-white text-base font-bold px-6 py-2 my-2 rounded-md shadow-sm focus:outline-none"
          style={{ backgroundColor: "#F12B2C" }}
        >
          {spinnerLoading ? <LoadSpinner /> : "Delete Account"}
        </button>
      </div>
    </>
  );
};

export { DeleteAccount };
