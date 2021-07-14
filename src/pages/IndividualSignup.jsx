import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { axiosInstance } from "../Auth/Axios";
import { Select, Input } from "../atoms";
import Intro from "../templates/Intro";
import eyeClosed from "../assets/eyeClosed.svg";
import eyeOpened from "../assets/eyeOpen.svg";
import { AuthLayout } from "../Layout";

const accountType = [
  ["Individual", "Individual"],
  ["Business", "Business"],
];

const IndividualSignup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(true);
  const [isBusiness, setIsBusiness] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };

  let accountSelected;
  const getAccountType = (val) => {
    accountSelected = val.target.value;
    if (accountSelected === "Business") {
      setIsBusiness(!isBusiness);
    }
  };

  const validationSchema = Yup.object().shape({
    account_type: Yup.string().required("Account Type is required"),
    name: Yup.string().required("Account Name is required"),
    business_name: Yup.string().required("Business Name is required"),
    business_phone: Yup.string().required("Business Number is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
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
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // console.log(data);
    axiosInstance.post("auth/register", data).then((response) => {
      console.log(response);
    });
  }
  return (
    <AuthLayout>
      <Intro
        title="Register"
        subtitle="Provide your details in order to register your account"
      />
      <form className="mt-12 m-auto w-8/12" onSubmit={handleSubmit(onSubmit)}>
        {formState.isSubmitted && (
          <div className="success">Form submitted successfully</div>
        )}
        <Select
          values={accountType}
          selectedValue="Individual"
          name="account_type"
          {...register("account_type")}
          onChange={(val) => getAccountType(val)}
          error={errors.account_type?.message}
        />
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
        {isBusiness ? (
          <div className="">
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
              placeholder="00000000"
              label="Business Number"
              name="business_number"
              {...register("business_phone")}
              error={errors.business_phone?.message}
            />
          </div>
        ) : (
          ""
        )}

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
        <div className="my-8 flex w-full justify-between items-center">
          <button className="rounded-lg p-4 text-white bg-primary font-semibold mr-10">
            Register as an {"Individual" || accountSelected}
          </button>
          <button className="rounded-lg px-10 py-4 text-primary bg-white border border-primary font-semibold">
            Submit
          </button>
        </div>
      </form>

      <Link to="/login">
        <p className="text-center font-normal text-sm mb-20">
          Already have an account?
          <span className="text-primary font-bold">Sign In</span>
        </p>
      </Link>
    </AuthLayout>
  );
};

export { IndividualSignup };
