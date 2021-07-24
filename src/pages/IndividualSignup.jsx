import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { registerUser, useAuthState, useAuthDispatch } from "../Context";
import { Input, Button } from "../atoms";
import eyeClosed from "../assets/eyeClosed.svg";
import eyeOpened from "../assets/eyeOpen.svg";
import { RegisterLayout } from "../Layout";

const IndividualSignup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Account Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Terms and Conditions must be accepted"
    ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  const dispatch = useAuthDispatch();
  const { loading, errorMessage, registerSuccess } = useAuthState();

  const onSubmit = async (data) => {
    let accountType = { account_type: "Individual" };
    const userData = { ...accountType, ...data };
    try {
      let response = await registerUser(dispatch, userData);
      if (!response.status === 201) return;
      toast.success(registerSuccess && registerSuccess);
    } catch (error) {
      toast.error(errorMessage && errorMessage);
      console.log(error);
    }
    // reset();
  };
  return (
    <RegisterLayout>
      <form className="mt-12 m-auto w-8/12" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="example@example.com"
          label="Account Name"
          name="name"
          {...register("name")}
          error={errors.name?.message}
        />
        <Input
          type="email"
          placeholder="example@example.com"
          label="Email Address"
          name="email"
          {...register("email")}
          error={errors.email?.message}
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
            name="password"
            autocomplete="on"
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
          <Input
            placeholder="xxxxxxx"
            type={confirmPasswordShown ? "text" : "password"}
            label="Confirm Password"
            name="password_confirmation"
            autocomplete="on"
            {...register("password_confirmation")}
            error={errors.password_confirmation?.message}
          />
        </div>
        <Input
          type="text"
          placeholder="00000000000"
          label="Contact number"
          name="phone"
          {...register("phone")}
          error={errors.phone?.message}
        />
        <input
          type="checkbox"
          value=""
          className="mr-2"
          name="acceptTerms"
          {...register("acceptTerms")}
        />
        <label htmlFor="Terms" className="text-sm font-normal">
          I agree to the Terms of Service and Privacy Policy
        </label>
        <span>
          <p className="text-red-500 text-sm">{errors.acceptTerms?.message}</p>
        </span>
        <Button loading={loading} buttonText="Register as an Individual" />
      </form>
    </RegisterLayout>
  );
};

export { IndividualSignup };
