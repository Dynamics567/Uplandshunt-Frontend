import { useState } from "react";
import { Link } from "react-router-dom";

import { Select, Input } from "../atoms";
import Intro from "../templates/Intro";
import eyeClosed from "../assets/eyeClosed.svg";
import eyeOpened from "../assets/eyeOpen.svg";
import { AuthLayout } from "../Layout";

const accountType = [
  ["Individual Account", "Individual Account"],
  ["Business Account", "Business Account"],
];

const IndividualSignup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <AuthLayout>
      <Intro
        title="Register"
        subtitle="Provide your details in order to register your account"
      />
      <form className="mt-12 m-auto w-8/12">
        <Select
          label="Category"
          values={accountType}
          selectedValue="Individual Account"
          labelName="Account Type"
          // onValueChange={(val) => filterCategory(val)}
        />
        <Input
          type="text"
          placeholder="example@example.com"
          label="Account Name"
        />
        <Input
          type="email"
          placeholder="example@example.com"
          label="Email Address"
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
          <Input
            placeholder="xxxxxxx"
            type={passwordShown ? "text" : "password"}
            label="Confirm Password"
          />
        </div>
        <Input type="email" placeholder="00000000000" label="Contact number" />
        <input type="radio" value="" className="mr-2" />
        <label htmlFor="Terms" className="text-sm font-normal">
          I agree to the Terms of Service and Privacy Policy
        </label>

        <div className="my-8 flex w-full justify-between items-center">
          <button className="rounded-lg p-4 text-white bg-primary font-semibold mr-10">
            Register as an individual
          </button>
          <button className="rounded-lg px-10 py-4 text-primary bg-white border border-primary font-semibold">
            Submit
          </button>
        </div>
      </form>

      <Link to="/login">
        <p className="text-center font-normal text-sm mb-20">
          Already have an account?{" "}
          <span className="text-primary font-bold">Sign In</span>
        </p>
      </Link>
    </AuthLayout>
  );
};

export { IndividualSignup };
