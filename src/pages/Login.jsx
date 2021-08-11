import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { loginUser, useAuthState, useAuthDispatch } from "../Context";
import { Button, Input } from "../atoms";
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

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();
  const userPath = sessionStorage.getItem("propertyPath");

  const handleLogin = async (data) => {
    let email = data.email;
    let password = data.password;
    try {
      let response = await loginUser(dispatch, { email, password });
      if (!response.data.user) return;
      toast.success(response.message);
      window.location.replace(userPath || "/dashboard");
    } catch (error) {
      toast.error(errorMessage && errorMessage);
      console.log(error);
    }
  };
  return (
    <AuthLayout>
      <Intro
        title="Welcome Back"
        subtitle="Provide your email and password to login to the system"
      />
      <form
        className="mt-12 m-auto w-8/12"
        onSubmit={handleSubmit(handleLogin)}
      >
        {/* {errorMessage ? (
          <p className="text-sm text-red-400">{errorMessage}</p>
        ) : null} */}
        {/* {errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>} */}
        <Input
          type="email"
          placeholder="example@example.com"
          label="Email"
          {...register("email")}
          error={errors.email?.message}
          disabled={loading}
        />
        <div className="w-full relative">
          <i onClick={togglePasswordVisibility}>
            <img
              src={passwordShown ? eyeOpened : eyeClosed}
              alt="visible"
              className="w-6 absolute visibility mt-8 ml-96"
            />
          </i>
          <Input
            placeholder="xxxxxxx"
            type={passwordShown ? "text" : "password"}
            label="Password"
            {...register("password")}
            error={errors.password?.message}
            disabled={loading}
          />
        </div>
        <Link to="/forgotpassword">
          <p className="underline text-gray-400 text-sm text-right mt-2">
            Forgot password ? Click here to reset the password
          </p>
        </Link>
        <Button loading={loading} buttonText="Log in" />
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
