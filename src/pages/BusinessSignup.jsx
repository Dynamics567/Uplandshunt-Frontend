import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { registerUser, useAuthState, useAuthDispatch } from "../Context";
import { Input, Button } from "../atoms";
import eyeClosed from "../assets/eyeClosed.svg";
import eyeOpened from "../assets/eyeOpen.svg";
import { RegisterLayout } from "../Layout";

const BusinessSignup = () => {
  const location = useHistory();

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };

  const dispatch = useAuthDispatch();
  const { loading, errorMessage, registerSuccess } = useAuthState();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Account Name is required"),
    business_name: Yup.string().required("Business Name is required"),
    business_phone: Yup.string().required("Business Phone is required"),
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
  const { reset, register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    let accountType = { account_type: "Business" };
    const userData = { ...accountType, ...data };
    console.log(userData);
    try {
      let response = await registerUser(dispatch, userData);
      console.log(response);
      if (!response.status === 201) return;
      // location.push("/login");
    } catch (error) {
      console.log(error);
    }
    reset({});
  };
  return (
    <RegisterLayout>
      <form className="mt-12 m-auto w-8/12" onSubmit={handleSubmit(onSubmit)}>
        {/* {formState.isSubmitted && (
          <div className="success">Form submitted successfully</div>
        )} */}
        {errorMessage ? (
          <p className="text-sm text-red-400">{errorMessage}</p>
        ) : null}
        {registerSuccess ? (
          <p className="text-sm text-green-400">{registerSuccess}</p>
        ) : null}
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
            autocomplete="on"
            name="password_confirmation"
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
        <Input
          placeholder="xxxxxxx"
          type="text"
          label="Business Name"
          name="business_name"
          {...register("business_name")}
          error={errors.business_name?.message}
        />
        <Input
          placeholder="xxxxxxx"
          type="text"
          label="Business Number"
          name="business_phone"
          {...register("business_phone")}
          error={errors.business_phone?.message}
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
        {/* <div className="bg-primary rounded-md p-4 my-8 flex w-full justify-between items-center">
          <div className="">{loading && <LoadSpinner />}</div>
          <button className="w-full text-white font-semibold focus:outline-none">
            Register as a Business
          </button>
        </div> */}
        <Button loading={loading} buttonText="Register as an Business" />
      </form>
    </RegisterLayout>
  );
};

export { BusinessSignup };
