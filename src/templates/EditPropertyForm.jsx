import { useForm } from "react-hook-form";

import { Input, Select } from "../atoms";
import MultiSelect from "react-multi-select-component";
import {
  availability,
  listType,
  furnishingType,
  depositStructure,
  multiSelectOptions,
  propertyType,
} from "../data/SelectOptions";

const EditPropertyForm = ({ preloadedValues }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: preloadedValues,
  });
  console.log(preloadedValues);
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="grid grid-cols-3 gap-4">
        <Input
          type="text"
          label="Property Name"
          name="name"
          {...register("name")}
        />
        {/* <Select
              // values={propertyType}
              selectedValue="Sell"
              labelName="Property Type"
              name="type"
            /> */}
        <Input
          type="text"
          label="City"
          name="city"
          {...register("city")}
          // placeholder="city"
        />
        <input
          className="border border-primary"
          name="city"
          {...register("city")}
        />
        <Input type="text" label="Price" name="price" {...register("name")} />
        <Input
          type="text"
          label="Area of the Property"
          name="area"
          {...register("area")}
        />
        <Input
          type="text"
          label="Postal Code"
          name="postal_code"
          {...register("postal_code")}
        />
        <Input
          type="text"
          label="Address Lane 1"
          name="address_line_one"
          {...register("address_line_one")}
        />
        <Input
          type="text"
          label="Address Lane 2"
          name="address_line_two"
          {...register("address_line_two")}
        />
        {/* <MultiSelect
              // options={multiSelectOptions}
              // value={selected}
              // onChange={setSelected}
              labelledBy="Amenities"
              className="mt-7"
            /> */}
        <Input
          type="text"
          label="Country"
          name="country"
          {...register("country")}
        />
        <Select
          values={listType}
          selectedValue="Sell"
          labelName="Listing Type"
          name="category"
        />
        {/* <Select
              // values={availability}
              selectedValue="Residence"
              labelName="Availability"
              name="availability"
            /> */}
        <Input
          type="text"
          label="Kitchen"
          name="kitchen"
          {...register("kitchen")}
        />
        <Input
          type="text"
          label="Bathroom"
          name="bathroom"
          {...register("bathroom")}
        />
        <Input type="text" label="Bedroom" name="bedroom" />
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
          ></textarea>
        </div>
        {/* <Select
              // values={furnishingType}
              selectedValue="Not furnished"
              labelName="Furnishing Type"
              name="furnish_type"
            /> */}
        {/* <Select
              // values={depositStructure}
              selectedValue="10%"
              labelName="Deposit Structure"
              name="deposit_structure"
            /> */}
      </section>
    </form>
  );
};

export default EditPropertyForm;
