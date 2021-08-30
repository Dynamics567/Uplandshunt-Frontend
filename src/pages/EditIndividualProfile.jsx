import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { Input, Button } from "../atoms";
import { axiosWithAuth } from "../Auth/Axios";

const EditIndividualProfile = () => {
  const location = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [profileUpdate, setProfileUpdate] = useState([]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    contact_number: Yup.number()
      .typeError("Contact Number must be a number")
      .required("Contact Number is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const editProfile = (data) => {
    setLoading(true);
    axiosWithAuth()
      .post("account/update-profile", data)
      .then(function (response) {
        console.log(response);
        if (response) {
          const message = response.data.data;
          setProfileUpdate(message);
          setLoading(false);
        }
        toast.success(response.data.message);
        location.push("/dashboard/profile");
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
    <div>
      <form
        className="m-auto w-11/12 mt-8"
        onSubmit={handleSubmit(editProfile)}
      >
        <section className="grid grid-cols-3 gap-4">
          <Input
            type="text"
            label="Name"
            name="name"
            {...register("name")}
            error={errors.name?.message}
          />
          <Input
            type="text"
            label="Email Address"
            name="email"
            {...register("email")}
            error={errors.email?.message}
          />

          <Input
            type="text"
            label="Address"
            name="address"
            {...register("address")}
            error={errors.address?.message}
          />
          <Input
            type="text"
            label="Country"
            name="country"
            {...register("country")}
            error={errors.country?.message}
          />

          <Input
            type="text"
            label="State"
            name="state"
            {...register("state")}
            error={errors.state?.message}
          />

          <Input
            type="text"
            label="City"
            name="city"
            {...register("city")}
            error={errors.city?.message}
          />
          <Input
            type="text"
            label="Contact Number"
            name="contact_number"
            {...register("contact_number")}
            error={errors.contact_number?.message}
          />
        </section>
        <div className="w-1/4 flex justify-center">
          <Button loading={loading} buttonText="Save" />
        </div>
      </form>
    </div>
  );
};

export { EditIndividualProfile };
