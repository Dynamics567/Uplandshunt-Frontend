import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import edit from "../assets/userDashboard/edit.svg";
import { axiosWithAuth } from "../Auth/Axios";
import DashboardLoader from "./DashboardLoader";

const IndividualProfile = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [setError] = useState("");

  const getUserProfile = () => {
    setLoading(true);
    axiosWithAuth()
      .get("auth/me")
      .then(function (response) {
        const profile = response.data.data;
        setResponse(profile);
        setLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          setError(error.response.data.data);
          setLoading(false);
        }
        // handle error
        setError(error.status);
      });
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const {
    email,
    first_name,
    phone,
    avatar,
    last_name,
    address,
    country,
    state,
    city,
  } = response;

  const userObject = [
    ["Name", `${first_name} ${last_name}`],
    ["Address", address],
    ["Country", country],
    ["State", state],
    ["City", city],
    ["Contact Number", phone],
    ["Email Address", email],
  ];
  return (
    <>
      {loading ? (
        <DashboardLoader />
      ) : (
        <div className="">
          <div className="flex mb-20">
            <div className="flex-none mr-6 ml-10 mt-6">
              <img src={avatar} alt="profileAvatar" className="rounded-full" />
              <p className="font-bold text-2xl mb-4"></p>
              <p className="font-semibold text-base"></p>
            </div>

            <div className="flex-grow w-full">
              <div className="border rounded-md mt-6 ml-10 w-3/4">
                <div className="bg-primary flex justify-between p-4 text-white">
                  <p className="font-bold text-base">Personal Information</p>
                  <Link
                    to="/dashboard/editindividualprofile"
                    className="cursor-pointer"
                  >
                    <img src={edit} alt="edit" />
                  </Link>
                </div>
                <div
                  className=""
                  style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                >
                  {userObject.map((item, index) => {
                    return (
                      <div
                        className="flex p-4"
                        key={index}
                        style={{
                          borderBottom: "0.7px solid #c4c4c4",
                        }}
                      >
                        <p
                          className="font-semibold text-base"
                          style={{ flex: "1" }}
                        >
                          {item[0]}
                        </p>
                        <p
                          className="font-normal text-lg mr-4"
                          style={{ flex: "1" }}
                        >
                          {item[1]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualProfile;
