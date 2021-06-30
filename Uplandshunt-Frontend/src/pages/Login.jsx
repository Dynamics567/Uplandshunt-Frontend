import { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "../atoms";
import Intro from "../templates/Intro";
import eyeClosed from "../assets/eyeClosed.svg";
import eyeOpened from "../assets/eyeOpen.svg";
import gmail from "../assets/gmail.svg";
import { AuthLayout } from "../Layout";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <AuthLayout>
      <Intro
        title="Welcome Back"
        subtitle="Provide your username and password to login to the system"
      />
      <form className="mt-12 m-auto w-8/12">
        <label htmlFor="Username" className="font-bold text-sm pb-4">
          Username
        </label>
        <Input type="text" placeholder="example@example.com" />
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
        <Link to="/forgotpassword">
          <p className="underline text-right text-xs font-normal">
            Forgot password ? Click here to reset the password
          </p>
        </Link>

        <div className="my-8 flex w-full justify-between items-center text-center">
          <button className="rounded-md p-4 text-white bg-primary font-semibold w-full">
            Log In
          </button>
        </div>
      </form>

      <Link to="/register">
        <p className="text-center font-normal text-sm">
          Don't have an account?
          <span className="text-primary font-bold"> Sign Up</span>
        </p>
      </Link>

      <div className="m-auto w-8/12">
        <p className="text-lightgreen in-between font-bold font-sm my-12">or</p>

        <div className="flex justify-center rounded-md border border-primary p-3">
          <img src={gmail} alt="gmail" className="mr-4" />
          <p className="font-semibold text-base text-center">
            Log in with Google
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export { Login };
