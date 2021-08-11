import { useAuthState } from "../Context";

import listingDetails from "../assets/userDashboard/listingDetails.svg";
import transactionHistory from "../assets/userDashboard/transactionHistory.svg";
import savedProperties from "../assets/userDashboard/savedProperties.svg";
import { axiosWithAuth } from "../Auth/Axios";
import { useEffect } from "react";

const Notification = (props) => {
  const userDetails = useAuthState();

  const getGraphDetails = () => {
    axiosWithAuth()
      .get("graph")
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    getGraphDetails();
  }, []);
  return (
    <div className="m-auto w-11/12">
      <p className="font-bold text-base my-4 ">
        Welcome {userDetails.user?.first_name}
      </p>
      <div className="grid grid-cols-2 gap-2">
        <img src={listingDetails} alt="listingDetails" />
        <img
          src={transactionHistory}
          alt="transactionHistory"
          className="mr-10"
        />
        <img src={savedProperties} alt="savedProperties" />
      </div>
    </div>
  );
};

export { Notification };
