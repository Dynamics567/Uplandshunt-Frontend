import { useState } from "react";

import { EditProfile } from "../organisms";
import profileAvatar from "../assets/userDashboard/profileAvatar.svg";
import edit from "../assets/userDashboard/edit.svg";
import { profile } from "../data/subscription";

const Profile = () => {
  const [editUserProfile, setEditUserProfile] = useState(false);

  const editProfile = () => {
    setEditUserProfile(true);
  };
  return (
    <div className="">
      {editUserProfile ? (
        <EditProfile />
      ) : (
        <div className="flex mb-20">
          <div className="flex-none mr-6 ml-10 mt-6">
            <img src={profileAvatar} alt="profileAvatar" />
            <p className="font-bold text-2xl mb-4">Chidi Anene</p>
            <p className="font-semibold text-base">Realtor/Estate Manager</p>
          </div>

          <div className="flex-grow w-full">
            <div className="border rounded-md mt-6 ml-10 w-3/4">
              <div className="bg-primary flex justify-between p-4 text-white">
                <p className="font-bold text-base">Personal Information</p>
                <div className="cursor-pointer" onClick={editProfile}>
                  <img src={edit} alt="edit" />
                </div>
              </div>
              <div
                className=""
                style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
              >
                {profile.map(({ id, question, answer }) => {
                  return (
                    <div
                      className="flex p-4"
                      key={id}
                      style={{
                        borderBottom: "0.7px solid #c4c4c4",
                      }}
                    >
                      <p
                        className="font-semibold text-base"
                        style={{ flex: "1" }}
                      >
                        {question}
                      </p>
                      <p
                        className="font-normal text-lg mr-4"
                        style={{ flex: "1" }}
                      >
                        {answer}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Profile };
