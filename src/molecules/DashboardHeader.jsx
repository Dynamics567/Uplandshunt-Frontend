import { useEffect, useState } from "react";
import { useAuthState } from "../Context";

// import search from "../assets/search.svg";
// import active from "../assets/userDashboard/active.svg";
import notify from "../assets/userDashboard/Notify.png";
import avatar from "../assets/userDashboard/avatar.svg";
import { axiosWithAuth } from "../Auth/Axios";

const DashboardHeader = () => {
  const userDetails = useAuthState();

  const [notifications, setNotifications] = useState();
  const [showNotifications, setShowNotifications] = useState(false);

  const getNotifications = () => {
    axiosWithAuth()
      .get("/user/dashboard/notification_count")
      .then((response) => {
        console.log(response);
      });
  };

  const fetchNotifications = () => {
    axiosWithAuth()
      .get("/user/dashboard/notifications")
      .then((response) => {
        const result = response.data.data;
        setNotifications(result);
      });
  };

  const showUserNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  useEffect(() => {
    getNotifications();
    fetchNotifications();
  }, []);
  return (
    <>
      <div
        className="flex justify-end p-4"
        style={{ boxShadow: "0px 0px 4px 0px #eea7a740" }}
      >
        {/* <div className="flex w-full">
        <input
          type="text"
          placeholder="Lagos"
          className="rounded-3xl rounded-r-none p-4 text-sm font-normal border border-lightAsh"
          style={{ width: "50%" }}
        />
        <img src={search} alt="search" />
      </div> */}
        <div className="flex items-center" onClick={showUserNotifications}>
          <div className="flex mr-6 cursor-pointer">
            <img src={notify} alt="active" className="w-8" />
            <p className="bg-primary rounded-full p-2 text-white h-6 w-6 -ml-4 flex items-center justify-center cursor-pointer">
              {notifications.length}
            </p>
          </div>
          <p className="font-bold text-base mr-4">
            {userDetails.user?.first_name}
          </p>
          <img src={avatar} alt="avatar" className="mr-10" />
        </div>
      </div>
      {showNotifications && (
        <div className="flex justify-end w-1/2 bg-primary">
          <p>test</p>
        </div>
      )}
    </>
  );
};

export { DashboardHeader };
