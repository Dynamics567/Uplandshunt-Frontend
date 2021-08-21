import { useEffect, useState } from "react";
import { useAuthState } from "../Context";

// import search from "../assets/search.svg";
// import active from "../assets/userDashboard/active.svg";
import DashboardLoader from "../templates/DashboardLoader";
import notify from "../assets/userDashboard/Notify.png";
import avatar from "../assets/userDashboard/avatar.svg";

const DashboardHeader = () => {
  const userDetails = useAuthState();

  const [loading] = useState(false);
  const [notifications] = useState("0");
  const [showNotifications, setShowNotifications] = useState(false);

  // const getNotifications = () => {
  //   setLoading(true);
  //   axiosWithAuth()
  //     .get("/user/dashboard/notification_count")
  //     .then((response) => {
  //       const result = response.data;
  //       console.log(result);
  //       setNotifications(result);
  //       setLoading(false);
  //     });
  // };

  // const fetchNotifications = () => {
  //   setLoading(true);
  //   axiosWithAuth()
  //     .get("/user/dashboard/notifications")
  //     .then((response) => {
  //       const result = response.data;
  //       console.log(result);
  //       setNotifications(result);
  //       setLoading(false);
  //     });
  // };

  const showUserNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  useEffect(() => {
    // getNotifications();
    // fetchNotifications();
  }, []);
  return (
    <>
      {loading ? (
        <DashboardLoader />
      ) : (
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
                  {/* {notifications.length} */}
                  {notifications}
                </p>
              </div>
              <p className="font-bold text-base mr-4">
                {userDetails.user?.first_name}
              </p>
              <img src={avatar} alt="avatar" className="mr-10" />
            </div>
          </div>
          {showNotifications && (
            <div className="grid grid-cols-3">
              <div className="col-start-3 col-end-4 bg-white shadow-md rounded-md p-4 border-b border-lightAsh">
                <p>test</p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export { DashboardHeader };
