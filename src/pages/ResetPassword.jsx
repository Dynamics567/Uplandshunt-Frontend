import { useState } from "react";

import { Input } from "../atoms";
import Intro from "../templates/Intro";
import eyeClosed from "../assets/eyeClosed.svg";
import eyeOpened from "../assets/eyeOpen.svg";
import { AuthLayout } from "../Layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const ResetPassword = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function handleResetPassword(data) {
    console.log(data);
  }
  return (
    <AuthLayout>
      <Intro
        title="Reset Password"
        subtitle="Provide a new password to reset your password for your account"
      />
      <form
        className="mt-12 m-auto w-8/12"
        onSubmit={handleSubmit(handleResetPassword)}
      >
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
            {...register("password")}
            error={errors.password?.message}
          />
        </div>
        <div className="w-full relative">
          <i onClick={toggleConfirmPasswordVisibility}>
            <img
              src={confirmPasswordShown ? eyeOpened : eyeClosed}
              alt="visible"
              className="w-6 absolute visibility mt-8 ml-96"
            />
          </i>
          <label htmlFor="Password" className="font-bold text-sm pb-4">
            Confirm Password
          </label>
          <Input
            placeholder="xxxxxxx"
            type={confirmPasswordShown ? "text" : "password"}
            {...register("password_confirmation")}
            error={errors.password_confirmation?.message}
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
