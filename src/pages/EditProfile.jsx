import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Input, Button } from "../atoms";
import { axiosInstance } from "../Auth/Axios";
import { useAuthState } from "../Context";

const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const userDetails = useAuthState();
  const userToken = userDetails.token;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Property Name is required"),
    company_name: Yup.string().required("Company Name is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    contact_number: Yup.number().required("Contact Number is required"),
    website: Yup.string().required("Website URL is required"),
    logo: Yup.string().required("Company logo is required"),
    address: Yup.string().required("Address is required"),
    // company_phone: Yup.string().required("Area of the Property is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  const editProfile = (data) => {
    const config = {
      headers: { Authorization: `Bearer ${userToken}` },
    };

    setLoading(true);
    axiosInstance
      .post("account/update-profile", data, config)
      .then(function (response) {
        console.log(response);
        // setResponse(response.data.data);
        // setLoading(false);
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
    <div>
      <form
        className="m-auto w-11/12 mt-8"
        onSubmit={handleSubmit(editProfile)}
      >
        <div className="flex w-full">
          <div className="w-4/12 mr-8">
            <Input
              type="text"
              label="Name"
              name="name"
              {...register("name")}
              error={errors.name?.message}
            />
          </div>
          <div className="w-4/12 mr-8">
            <Input
              type="text"
              label="Company Name"
              name="company_name"
              {...register("company_name")}
              error={errors.company_name?.message}
            />
          </div>
          <div className="w-4/12">
            <Input
              type="text"
              label="Address"
              name="address"
              {...register("address")}
              error={errors.address?.message}
            />
          </div>
        </div>

        <div className="">
          <div className="flex w-full">
            <div className="w-4/12 mr-8">
              <Input
                type="text"
                label="Country"
                name="country"
                {...register("country")}
                error={errors.country?.message}
              />
            </div>
            <div className="w-4/12  mr-8">
              <Input
                type="text"
                label="State"
                name="state"
                {...register("state")}
                error={errors.state?.message}
              />
            </div>
            <div className="w-4/12">
              <Input
                type="text"
                label="City"
                name="city"
                {...register("city")}
                error={errors.city?.message}
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex w-full">
            <div className="w-4/12 mr-8">
              <Input
                type="text"
                label="Contact Number"
                name="contact_number"
                {...register("contact_number")}
                error={errors.contact_number?.message}
              />
            </div>
            <div className="w-4/12  mr-8">
              <Input
                type="text"
                label="Email Address"
                name="email"
                {...register("email")}
                error={errors.email?.message}
              />
            </div>
            <div className="w-4/12">
              <Input
                type="text"
                label="Website URL"
                name="website"
                {...register("website")}
                error={errors.website?.message}
              />
            </div>
          </div>
        </div>

        <div className="w-4/12">
          <Input
            type="file"
            label="Company Logo"
            name="logo"
            {...register("logo")}
            error={errors.logo?.message}
          />
        </div>
        <div className="w-1/4">
          <Button loading={loading} buttonText="Save" />
        </div>
      </form>
    </div>
  );
};

export { EditProfile };
