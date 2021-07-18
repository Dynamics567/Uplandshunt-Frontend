import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { loginUser, useAuthState, useAuthDispatch } from "../Context";
import { Input } from "../atoms";
import Intro from "../templates/Intro";
import eyeClosed from "../assets/eyeClosed.svg";
import eyeOpened from "../assets/eyeOpen.svg";
import gmail from "../assets/gmail.svg";
import { AuthLayout } from "../Layout";

const Login = () => {
  const location = useHistory();
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

  const handleLogin = async (data) => {
    let email = data.email;
    let password = data.password;
    try {
      let response = await loginUser(dispatch, { email, password });
      console.log(response);
      if (!response.data.user) return;
      location.push("/dashboard");
    } catch (error) {
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
        {errorMessage ? (
          <p className="text-sm text-red-400">{errorMessage}</p>
        ) : null}
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
