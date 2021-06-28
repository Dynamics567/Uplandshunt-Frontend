import { useState } from "react";

import { Input } from "../atoms";
import Intro from "../templates/Intro";
import eyeClosed from "../assets/eyeClosed.svg";
import eyeOpened from "../assets/eyeOpen.svg";
import { AuthLayout } from "../Layout";

const ResetPassword = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <AuthLayout>
      <Intro
        title="Reset Password"
        subtitle="Provide a new password to reset your password for your account"
      />
      <form className="mt-12 m-auto w-8/12">
        <div className="w-full relative">
          <i onClick={togglePasswordVisibility}>
            <img
              src={passwordShown ? eyeOpened : eyeClosed}
              alt="visible"
              className="w-6 absolute visibility mt-8 ml-96"
            />
          </i>
          <label htmlFor="Password" className="font-bold text-sm pb-4">
            Password
          </label>
          <Input
            placeholder="xxxxxxx"
            type={passwordShown ? "text" : "password"}
          />
        </div>
        <div className="w-full relative">
          <i onClick={togglePasswordVisibility}>
            <img
              src={passwordShown ? eyeOpened : eyeClosed}
              alt="visible"
              className="w-6 absolute visibility mt-8 ml-96"
            />
          </i>
          <label htmlFor="Password" className="font-bold text-sm pb-4">
            Confirm Password
          </label>
          <Input
            placeholder="xxxxxxx"
            type={passwordShown ? "text" : "password"}
          />
        </div>

        <div className="my-8 flex w-full justify-between items-center text-center">
          <button className="rounded-md p-4 text-white bg-primary font-semibold w-full">
            Reset Password
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export { ResetPassword };
