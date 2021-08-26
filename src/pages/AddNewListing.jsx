import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import MultiSelect from "react-multi-select-component";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";

// import leftArrow from "../assets/leftArrow.svg";
import { Button, Input, Select } from "../atoms";
import { axiosWithAuth } from "../Auth/Axios";
import {
  availability,
  listType,
  furnishingType,
  depositStructure,
  multiSelectOptions,
  propertyType,
  amenities,
} from "../data/SelectOptions";

const AddNewListing = () => {
  // const getManageDetailsPage = () => {
  //   window.scrollTo(0, 0);
  // };
  const location = useHistory();
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [setErrors] = useState("");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Property Name is required"),
    type: Yup.number().required("Property Type is required"),
    category: Yup.number().required("Category is required"),
    city: Yup.string().required("City is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .required("Price is required"),
    area: Yup.number()
      .typeError("Area of property must be a number")
      .required("Area of the Property is required"),
    postal_code: Yup.number()
      .typeError("Postal code must be a number")
      .required("Postal code is required"),
    address_line_one: Yup.string().required("Address Lane 1 is required"),
    address_line_two: Yup.string().required("Address Lane 2 is required"),
    country: Yup.string().required("Country is required"),
    availability: Yup.number().required("Availability is required"),
    kitchen: Yup.number()
      .typeError("Number of Kitchen must be a number")
      .required("Number of Kitchen is required"),
    bathroom: Yup.string().required("Number of Bathroom is required"),
    bedroom: Yup.number()
      .typeError("Number of Bedrooms must be a number")
      .required("Number of Bedrooms is required"),
    description: Yup.string().required("Property description is required"),
    furnish_type: Yup.number().required("Furnishing Type is required"),
    deposit_structure: Yup.number().required("Deposit Structure is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const addNewListing = (data) => {
    let amenities = { amenity: [selected[1].value] || [] };
    const propertyData = { ...amenities, ...data };
    // console.log(propertyData);
    setLoading(true);
    axiosWithAuth()
      .post("property", propertyData)
      .then(function (response) {
        console.log(response);
        if (response) {
          console.log(response);
          setLoading(false);
        }
        toast.success(response.data.message);
        location.push(
          `/dashboard/listings/imageUpload/${response.data.data.id}`
        );
      })
      .catch(function (error) {
        if (error.response) {
          setErrors(errors);
          toast.error(errors);
        }
        // handle error
        // setError(error.status);
      });
  };
  return (
    <form
      className="m-auto mt-8 w-11/12 flex flex-wrap"
      onSubmit={handleSubmit(addNewListing)}
    >
      <section className="grid grid-cols-3 gap-4">
        <Input
          type="text"
          label="Property Name"
          name="name"
          {...register("name")}
          error={errors.name?.message}
        />
        <Select
          values={propertyType}
          selectedValue="Sell"
          labelName="Property Type"
          name="type"
          {...register("type")}
          error={errors.type?.message}
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
          label="Price"
          name="price"
          {...register("price")}
          error={errors.price?.message}
        />

        <Input
          type="text"
          label="Area of the Property"
          name="area"
          {...register("area")}
          error={errors.area?.message}
        />
        <Input
          type="text"
          label="Postal Code"
          name="postal_code"
          {...register("postal_code")}
          error={errors.postal_code?.message}
        />
        <Input
          type="text"
          label="Address Lane 1"
          name="address_line_one"
          {...register("address_line_one")}
          error={errors.address_line_one?.message}
        />
        <Input
          type="text"
          label="Address Lane 2"
          name="address_line_two"
          {...register("address_line_two")}
          error={errors.address_line_two?.message}
        />

        {/* <label
          htmlFor={amenities}
          className="text-lg font-semibold text-left"
        ></label> */}
        <MultiSelect
          options={multiSelectOptions}
          value={selected}
          onChange={setSelected}
          labelledBy="Amenities"
          className="mt-7"
          labelledBy="test"
        />

        <Input
          type="text"
          label="Country"
          name="country"
          {...register("country")}
          error={errors.country?.message}
        />
        <Select
          values={listType}
          selectedValue="Sell"
          labelName="Listing Type"
          name="category"
          {...register("category")}
          error={errors.category?.message}
        />
        <Select
          values={availability}
          selectedValue="Residence"
          labelName="Availability"
          name="availability"
          {...register("availability")}
          error={errors.availability?.message}
        />
        <Input
          type="text"
          label="Kitchen"
          name="kitchen"
          {...register("kitchen")}
          error={errors.kitchen?.message}
        />
        <Input
          type="text"
          label="Bathroom"
          name="bathroom"
          {...register("bathroom")}
          error={errors.bathroom?.message}
        />
        <Input
          type="text"
          label="Bedroom"
          name="bedroom"
          {...register("bedroom")}
          error={errors.bedroom?.message}
        />
        <div>
          <label className="text-lg font-semibold text-left">
            Property Description
          </label>
          <textarea
            className="w-full border border-gray-400 focus:outline-none px-2 rounded-md py-1 mt-1"
            rows="4"
            cols="5"
            placeholder="Write a short property description"
            name="description"
            {...register("description")}
            error={errors.description?.message}
          ></textarea>
        </div>
        <Select
          values={furnishingType}
          selectedValue="Not furnished"
          labelName="Furnishing Type"
          name="furnish_type"
          {...register("furnish_type")}
          error={errors.furnish_type?.message}
        />
        <Select
          values={depositStructure}
          selectedValue="10%"
          labelName="Deposit Structure"
          name="deposit_structure"
          {...register("deposit_structure")}
          error={errors.deposit_structure?.message}
        />
      </section>

      {/* <div className="mb-12 mt-10">
        <p className="font-bold text-base mb-4">Images Of Properties</p>
        <div className="flex">
          <img src={prop1} alt="prop1" className="mr-4 w-1/2" />
          <img src={prop1} alt="prop1" className="mr-4 w-1/2" />
          <img src={prop1} alt="prop1" className=" w-1/2" />
        </div>
      </div> */}

      <div
        className="flex w-full justify-center items-center text-center mb-10"
        // onClick={getManageDetailsPage}
      >
        <div className="w-1/2">
          <Button loading={loading} buttonText="Continue" />
        </div>
      </div>
    </form>
  );
};

export { AddNewListing };
