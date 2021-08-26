import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
// import { useHistory } from "react-router-dom";

import { AuthLayout } from "../Layout";
import Intro from "../templates/Intro";
import { InputTwo } from "../atoms";
import LoadSpinner from "../templates/LoadSpinner";
import { axiosInstance } from "../Auth/Axios";
// import { Toast } from "../organisms";

const PasswordRecovery = () => {
  // const location = useHistory();

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  const submitEmail = (data) => {
    setLoading(true);
    axiosInstance
      .post("auth/forgot-password", data)
      .then(function (response) {
        reset();
        const successMessage = response.data.data;
        setResponse(successMessage);
        toast.success(successMessage);
        setLoading(false);
        // location.push("/resetpassword");
      })
      .catch(function (error) {
        if (error.response) {
          reset();
          const errorMessage = error.response.data.data;
          setError(errorMessage);
          toast.error(errorMessage);
          setLoading(false);
        }
      });
  };

  return (
    <div className="h-full">
      <AuthLayout>
        <Intro
          title="Password Recovery"
          subtitle="Provide your registered email address to recover your password"
        />
        <form
          className="mt-12 m-auto w-8/12"
          onSubmit={handleSubmit(submitEmail)}
        >
          <InputTwo
            type="email"
            placeholder="example@example.com"
            label="Email Address"
            register={register("email")}
            error={errors.email?.message}
          />
          <div className="bg-primary rounded-md p-4 my-8 flex w-full justify-between items-center text-center">
            <div className="">{loading && <LoadSpinner />}</div>
            <button className=" text-white bg-primary font-semibold w-full focus:outline-none">
              Send Link To Email
            </button>
          </div>
        </form>
      </AuthLayout>
    </div>
  );
};

export { PasswordRecovery };
