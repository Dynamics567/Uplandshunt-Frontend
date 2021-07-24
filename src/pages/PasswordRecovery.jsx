import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { useHistory } from "react-router-dom";

import { AuthLayout } from "../Layout";
// import check from "../assets/check.svg";
// import warning from "../assets/warning.svg";
import Intro from "../templates/Intro";
import { Input } from "../atoms";
import LoadSpinner from "../templates/LoadSpinner";
import { axiosInstance } from "../Auth/Axios";
// import { Toast } from "../organisms";

// const testList = [
//   {
//     id: 1,
//     title: "Success",
//     description: "This is a success toast component",
//     backgroundColor: "#5cb85c",
//     icon: check,
//   },
//   {
//     id: 2,
//     title: "Danger",
//     description: "This is an error toast component",
//     backgroundColor: "#d9534f",
//     icon: warning,
//   },
// ];

const PasswordRecovery = () => {
  // const location = useHistory();

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  // const { addToast } = useToasts();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const submitEmail = (data) => {
    setLoading(true);
    axiosInstance
      .post("auth/forgot-password", data)
      .then(function (response) {
        console.log(response);
        setResponse(response.data.data);
        setLoading(false);
        // location.push("/resetpassword");
      })
      .catch(function (error) {
        if (error.response) {
          setError(error.response.data.data);
          setLoading(false);
        }
        // handle error
        // setError(error.status);
      });
  };
  return (
    <div className="h-full">
      {/* <Toast toastList={testList} position="top-left" /> */}
      <AuthLayout>
        <Intro
          title="Password Recovery"
          subtitle="Provide your registered email address to recover your password"
        />
        <form
          className="mt-12 m-auto w-8/12"
          onSubmit={handleSubmit(submitEmail)}
        >
          {error && <p className="text-sm text-red-400">{error}</p>}
          {response && <p className="text-sm text-green-400">{response}</p>}
          <Input
            type="email"
            placeholder="example@example.com"
            label="Email Address"
            {...register("email")}
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
