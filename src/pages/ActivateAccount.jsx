import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { axiosInstance } from "../Auth/Axios";
import { Button, Input } from "../atoms";
import { AuthLayout } from "../Layout";
import Intro from "../templates/Intro";

const ActivateAccount = () => {
  let { token } = useParams();
  const location = useHistory();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  const activateAccount = (data) => {
    let userToken = { token: token };
    const userData = { ...userToken, ...data };
    setLoading(true);
    axiosInstance
      .post("auth/activate", userData)
      .then(function (response) {
        const results = response.data.data;
        setLoading(false);
        toast.success(results);
        location.push("/login");
      })
      .catch(function (error) {
        if (error.response) {
          setError(error.response.data.data);
          setLoading(false);
        }
        // handle error
        setError(error.status);
      });
  };
  return (
    <AuthLayout>
      <Intro
        title="Account Activation"
        subtitle="Provide your registered email address in order to activate your account
before you can log in"
      />
      <form
        className="mt-12 m-auto w-8/12"
        onSubmit={handleSubmit(activateAccount)}
      >
        <Input
          type="email"
          placeholder="example@example.com"
          label="Email"
          {...register("email")}
          error={errors.email?.message}
        />
        <Button loading={loading} buttonText="Activate Account" />
      </form>
    </AuthLayout>
  );
};

export { ActivateAccount };
