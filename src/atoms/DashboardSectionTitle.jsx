import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation } from "react-router";

const DashboardSectionTitle = ({
  text,
  buttonUrl,
  buttonText,
  showButton = true,
  error,
}) => {
  const location = useHistory();

  const addNewListing = () => {
    window.scrollTo(0, 0);
    if (error) {
      location.push(`/dashboard/subscription`);
      toast.error("You must have an active subscription to add listings");
    } else {
      location.push(buttonUrl);
    }
  };
  return (
    <div className="flex justify-between items-center w-full m-4">
      <div className="w-full">
        <p className="text-2xl font-bold">{text}</p>
        <div className="bg-primary w-16 h-2 ml-3"></div>
      </div>
      {showButton && (
        <div to={buttonUrl} className="w-full flex items-center justify-center">
          <button
            className="rounded-md p-4 text-white bg-primary font-semibold "
            onClick={addNewListing}
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export { DashboardSectionTitle };
