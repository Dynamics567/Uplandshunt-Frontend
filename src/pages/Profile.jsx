import { Link } from "react-router-dom";
import edit from "../assets/userDashboard/edit.svg";
// import { profile } from "../data/subscription";

const Profile = () => {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  currentUser = currentUser.user;
  const { email, first_name, phone, avatar, last_name, address } = currentUser;

  const newObject = [
    ["Name", `${first_name} ${last_name}`],
    ["Email Address", email],
    ["Contact Number", phone],
    ["Address", address],
  ];

  console.log(currentUser);

  return (
    <div className="">
      <div className="flex mb-20">
        <div className="flex-none mr-6 ml-10 mt-6">
          <img src={avatar} alt="profileAvatar" />
          <p className="font-bold text-2xl mb-4">{first_name}</p>
          <p className="font-semibold text-base"></p>
        </div>

        <div className="flex-grow w-full">
          <div className="border rounded-md mt-6 ml-10 w-3/4">
            <div className="bg-primary flex justify-between p-4 text-white">
              <p className="font-bold text-base">Personal Information</p>
              <Link to="/dashboard/editprofile" className="cursor-pointer">
                <img src={edit} alt="edit" />
              </Link>
            </div>
            <div
              className=""
              style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
            >
              {newObject.map((item, index) => {
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
  );
};

export { Profile };
