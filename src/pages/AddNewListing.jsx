import { useState } from "react";
import { useForm } from "react-hook-form";
import MultiSelect from "react-multi-select-component";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// import leftArrow from "../assets/leftArrow.svg";
// import prop1 from "../assets/prop1.svg";
import { Input, Select } from "../atoms";
import { axiosWithAuth } from "../Auth/Axios";
import {
  availability,
  listType,
  amenities,
  furnishingType,
  depositStructure,
  multiSelectOptions,
  propertyType,
} from "../data/SelectOptions";

const EditNewListing = () => {
  // const getManageDetailsPage = () => {
  //   window.scrollTo(0, 0);
  // };

  const [selected, setSelected] = useState([]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Property Name is required"),
    type: Yup.number().required("Property Type is required"),
    category: Yup.number().required("Category is required"),
    city: Yup.string().required("City is required"),
    price: Yup.string().required("Price is required"),
    area: Yup.number().required("Area of the Property is required"),
    postal_code: Yup.string().required("Postal code is required"),
    address_line_one: Yup.string().required("Address Lane 1 is required"),
    address_line_two: Yup.string().required("Address Lane 2 is required"),
    // amenity: Yup.string().required("Amenities is required"),
    country: Yup.string().required("Country is required"),
    availability: Yup.number().required("Availability is required"),
    kitchen: Yup.string().required("Number of Kitchen is required"),
    bathroom: Yup.string().required("Number of Bathroom is required"),
    bedroom: Yup.string().required("Number of Bedrooms is required"),
    furnish_type: Yup.number().required("Furnishing Type is required"),
    deposit_structure: Yup.number().required("Deposit Structure is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  const addNewListing = (data) => {
    let amenities = { amenity: selected };
    const propertyData = { ...amenities, ...data };
    console.log(propertyData);
    // setLoading(true);
    axiosWithAuth()
      .post("property", data)
      .then(function (response) {
        console.log(response);
        // setResponse(response.data.data);
        // setLoading(false);
        // location.push("/resetpassword");
      })
      .catch(function (error) {
        if (error.response) {
          // setError(error.response.data.data);
          // setLoading(false);
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
          type="number"
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

        <MultiSelect
          options={multiSelectOptions}
          value={selected}
          onChange={setSelected}
          labelledBy="Amenities"
          className="mt-7"
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
        <div className="w-full">
          <button className="rounded-md p-4 text-white bg-primary font-semibold w-1/2">
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export { EditNewListing };
