import { useAuthDispatch, useAuthState, logout } from "../Context";
import { useHistory } from "react-router-dom";

import listingDetails from "../assets/userDashboard/listingDetails.svg";
import transactionHistory from "../assets/userDashboard/transactionHistory.svg";
import priceHistory from "../assets/userDashboard/priceHistory.svg";
import savedProperties from "../assets/userDashboard/savedProperties.svg";

const Notification = (props) => {
  const location = useHistory();
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState;

  const handleLogout = () => {
    logout(dispatch);
    window.location.replace("/login");
  };

  return (
    <div className="m-auto w-11/12">
      <p className="font-bold text-base my-4 ">Welcome Chidi</p>
      <div className="grid grid-cols-2 gap-2">
        <img src={listingDetails} alt="listingDetails" />
        <img
          src={transactionHistory}
          alt="transactionHistory"
          className="mr-10"
        />
        <img src={priceHistory} alt="priceHistory" />
        <img src={savedProperties} alt="savedProperties" />
      </div>
      <p>Welcome {userDetails.user?.email}</p>
      <button onClick={handleLogout} className="bg-red-500 p-4 rounded-md">
        logout
      </button>
    </div>
  );
};

export { Notification };
