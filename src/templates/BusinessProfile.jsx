import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { InputTwo, Button } from "../atoms";
import { axiosWithAuth } from "../Auth/Axios";
import edit from "../assets/userDashboard/edit.svg";

const BusinessProfile = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const [error, setError] = useState("");

  const validationSchema = Yup.object().shape({
    old_password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

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

  const changePassword = (data) => {
    setSpinnerLoading(true);
    axiosWithAuth()
      .post("account/change-password", data)
      .then((response) => {
        reset();
        const successMessage = response.data.data;
        toast.success(successMessage);
        setSpinnerLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          setSpinnerLoading(false);
          const errorMessage = error.response.data.data;
          Object.values(errorMessage.errors)
            .flat()
            .map((err) => {
              toast.error(err);
            });
          reset();
        }
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
    website,
    company_name,
    city,
  } = response;

  const userObject = [
    ["Name", `${first_name} ${last_name}`],
    ["Company Name", company_name],
    ["Address", address],
    ["Country", country],
    ["State", state],
    ["City", city],
    ["Contact Number", phone],
    ["Email Address", email],
    ["Website", website],
  ];
  return (
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
                to="/dashboard/editbusinessprofile"
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
          <div className="border rounded-md mt-6 ml-10 w-3/4">
            <div className="bg-primary p-4 text-white">
              <p className="font-bold text-base">Change of Password</p>
            </div>
            <section className="p-4">
              <p className="font-semibold text-base my-2">
                Enter your password in order to change password:
              </p>
              <form onSubmit={handleSubmit(changePassword)}>
                <div className="w-full grid grid-cols-2 gap-4">
                  <InputTwo
                    label="Old Password"
                    type="text"
                    register={register("old_password")}
                    error={errors.old_password?.message}
                  />
                  <InputTwo
                    label="New Password"
                    type="text"
                    register={register("password")}
                    error={errors.password?.message}
                  />
                  <InputTwo
                    label="Password Confirmation"
                    type="text"
                    register={register("password_confirmation")}
                    error={errors.password_confirmation?.message}
                  />
                </div>
                <div className="flex -my-8 w-full justify-center items-center text-center">
                  <div className="w-1/2">
                    <Button loading={spinnerLoading} buttonText="Save" />
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
