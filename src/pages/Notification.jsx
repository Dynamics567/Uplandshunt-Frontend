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
    <div className="pl-6 mr-20">
      <p className="font-bold text-base my-4 ">Welcome Chidi</p>
      <section className="flex justify-between">
        <img src={listingDetails} alt="listingDetails" className="mr-10" />
        <img
          src={transactionHistory}
          alt="transactionHistory"
          className="mr-10"
        />
      </section>

      <section className="flex justify-between my-14">
        <img src={priceHistory} alt="priceHistory" className="mr-10" />
        <img src={savedProperties} alt="savedProperties" />
      </section>
      <p>Welcome {userDetails.user?.email}</p>
      <button onClick={handleLogout} className="bg-red-500 p-4 rounded-md">
        logout
      </button>
    </div>
  );
};

export { Notification };
