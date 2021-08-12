import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Button } from "../atoms";
import { InputTwo, Select } from "../atoms";
import MultiSelect from "react-multi-select-component";
import {
  availability,
  listType,
  furnishingType,
  depositStructure,
  multiSelectOptions,
  propertyType,
} from "../data/SelectOptions";
import { axiosWithAuth } from "../Auth/Axios";

const EditPropertyForm = ({ preloadedValues }) => {
  const { id } = useParams();

  const [selected, setSelected] = useState([]);
  const [loading, setloading] = useState(false);

  const validationSchema = Yup.object().shape({
    type: Yup.number().required("Property Type is required"),
    category: Yup.number().required("Category is required"),
    price: Yup.string().required("Price is required"),
    area: Yup.number().required("Area of the Property is required"),
    availability: Yup.number().required("Availability is required"),
    kitchen: Yup.string().required("Number of Kitchen is required"),
    bathroom: Yup.string().required("Number of Bathroom is required"),
    bedroom: Yup.string().required("Number of Bedrooms is required"),
    furnish_type: Yup.number().required("Furnishing Type is required"),
    deposit_structure: Yup.number().required("Deposit Structure is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState, reset } = useForm({
    formOptions,
    defaultValues: {
      name: preloadedValues?.name,
      city: preloadedValues?.city,
      price: preloadedValues?.price,
      area: preloadedValues?.area,
      postal_code: preloadedValues?.postal_code,
      address_line_one: preloadedValues?.address_line_one,
      address_line_two: preloadedValues?.address_line_two,
      country: preloadedValues?.country,
      kitchens: preloadedValues?.kitchens.kitchen.charAt(0),
      property_type: preloadedValues?.property_type.name,
      description: preloadedValues?.description,
      property_category: preloadedValues?.property_category.name,
      bed: preloadedValues?.bed.bedroom,
      bath: preloadedValues?.bath.bathroom,
    },
  });
  const { errors } = formState;

  // console.log(preloadedValues);
  const editDetails = (data) => {
    // let amenities = { amenity: [selected[1].value] || [] };
    // const propertyData = { ...amenities, ...data };
    // console.log(propertyData);
    // setloading(true);
    // axiosWithAuth()
    //   .put(`property/${id}`, propertyData)
    //   .then((response) => {
    //     console.log(response);
    //   });
    // console.log("work");
  };

  useEffect(() => {
    const defaultValues = {
      name: preloadedValues?.name,
      city: preloadedValues?.city,
      price: preloadedValues?.price,
      area: preloadedValues?.area,
      postal_code: preloadedValues?.postal_code,
      address_line_one: preloadedValues?.address_line_one,
      address_line_two: preloadedValues?.address_line_two,
      country: preloadedValues?.country,
      kitchens: preloadedValues?.kitchens.kitchen.charAt(0),
      property_type: preloadedValues?.property_type.name,
      property_category: preloadedValues?.property_category.name,
      description: preloadedValues?.description,
      bed: preloadedValues?.bed.bedroom.charAt(0),
      bath: preloadedValues?.bath.bathroom.charAt(0),
    };
    reset(defaultValues);
  }, [preloadedValues, reset]);

  return (
    <form onSubmit={handleSubmit(editDetails)}>
      <section className="grid grid-cols-3 gap-4">
        <InputTwo
          type="text"
          label="Property Name"
          name="name"
          register={register("name")}
          readOnly
        />
        <Select
          values={propertyType}
          selectedValue="Sell"
          labelName="Property Type"
          name="type"
          {...register("property_type")}
          error={errors.type?.message}
        />
        <InputTwo
          type="text"
          label="City"
          name="city"
          register={register("city")}
          readOnly
        />
        <InputTwo
          type="text"
          label="Price"
          name="price"
          register={register("price")}
          error={errors.price?.message}
        />
        <InputTwo
          type="text"
          label="Area of the Property"
          name="area"
          register={register("area")}
          error={errors.area?.message}
        />
        <InputTwo
          type="text"
          label="Postal Code"
          name="postal_code"
          register={register("postal_code")}
          readOnly
        />
        <InputTwo
          type="text"
          label="Address Lane 1"
          name="address_line_one"
          register={register("address_line_one")}
          readOnly
        />
        <InputTwo
          type="text"
          label="Address Lane 2"
          name="address_line_two"
          register={register("address_line_two")}
          readOnly
        />
        {/* <MultiSelect
          options={multiSelectOptions}
          value={selected}
          onChange={setSelected}
          labelledBy="Amenities"
          className="mt-7"
        /> */}
        <InputTwo
          type="text"
          label="Country"
          name="country"
          register={register("country")}
          readOnly
        />
        <Select
          values={listType}
          selectedValue="Sell"
          labelName="Listing Type"
          name="category"
          {...register("property_category")}
          error={errors.category?.message}
        />
        <Select
          values={availability}
          selectedValue="Residence"
          labelName="Availability"
          name="availability"
          error={errors.availability?.message}
        />
        <InputTwo
          type="text"
          label="Kitchen"
          name="kitchen"
          register={register("kitchens")}
          error={errors.kitchen?.message}
        />
        <InputTwo
          type="text"
          label="Bathroom"
          name="bathroom"
          register={register("bath")}
          error={errors.bathroom?.message}
        />
        <InputTwo
          type="text"
          label="Bedroom"
          name="bedroom"
          register={register("bed")}
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
            readOnly
            placeholder="Write a short property description"
            name="description"
            {...register("description")}
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

      <div className="flex w-full justify-center items-center text-center mb-10">
        <div className="w-1/2" onClick={editDetails}>
          <Button loading={loading} buttonText="Save" />
        </div>
      </div>
    </form>
  );
};

export default EditPropertyForm;
