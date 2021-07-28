import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import axios from "axios";

// import leftArrow from "../assets/leftArrow.svg";
// import prop1 from "../assets/prop1.svg";
import { Input, Select } from "../atoms";
import { useAuthState } from "../Context";
import { axiosInstance } from "../Auth/Axios";
import {
  propertyType,
  availability,
  listType,
  amenities,
  furnishingType,
  depositStructure,
} from "../data/SelectOptions";

const EditNewListing = () => {
  // const getManageDetailsPage = () => {
  //   window.scrollTo(0, 0);
  // };

  const userDetails = useAuthState();
  const userToken = userDetails.token;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Property Name is required"),
    property_type: Yup.string().required("Property type is required"),
    city: Yup.string().required("City is required"),
    price: Yup.string().required("Price is required"),
    area: Yup.string().required("Area of the Property is required"),
    postal_code: Yup.number().required("Postal code is required"),
    address_line_one: Yup.string().required("Address Lane 1 is required"),
    address_line_two: Yup.string().required("Address Lane 2 is required"),
    amenities: Yup.string().required("Amenities is required"),
    country: Yup.string().required("Country is required"),
    list_type: Yup.string().required("List type is required"),
    availability: Yup.string().required("Availability is required"),
    kitchen: Yup.number().required("Number of Kitchen is required"),
    bathroom: Yup.number().required("Number of Bathroom is required"),
    bedroom: Yup.number().required("Number of Bedrooms is required"),
    date: Yup.string().required("Date is required"),
    status: Yup.string().required("Selling status is required"),
    furnishing: Yup.string().required("Furnishing Type is required"),
    deposit: Yup.string().required("Deposit Structure is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  const addNewListing = (data) => {
    const config = {
      headers: { Authorization: `Bearer ${userToken}` },
    };

    // setLoading(true);
    axiosInstance
      .post("http://localhost:9090/v1/user/property/", data, config)
      .then(function (response) {
        console.log(response.data);
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
          selectedValue="Residence"
          labelName="Property Type"
          name="property_type"
          {...register("name")}
          error={errors.name?.message}
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
        <Select
          values={amenities}
          selectedValue="Gym"
          labelName="Amenities"
          name="amenities"
          {...register("amenities")}
          error={errors.amenities?.message}
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
          name="list_type"
          {...register("list_type")}
          error={errors.list_type?.message}
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
          type="number"
          label="Kitchen"
          name="kitchen"
          {...register("kitchen")}
          error={errors.kitchen?.message}
        />
        <Input
          type="number"
          label="Bathroom"
          name="bathroom"
          {...register("bathroom")}
          error={errors.bathroom?.message}
        />
        <Input
          type="number"
          label="Bedroom"
          name="bedroom"
          {...register("bedroom")}
          error={errors.bedroom?.message}
        />
        <Input
          type="text"
          label="Date"
          name="date"
          {...register("date")}
          error={errors.date?.message}
        />
        <Input
          type="text"
          label="Selling Status"
          name="status"
          {...register("status")}
          error={errors.status?.message}
        />
        <Select
          values={furnishingType}
          selectedValue="Not furnished"
          labelName="Furnishing Type"
          name="furnishing"
          {...register("furnishing")}
          error={errors.furnishing?.message}
        />
        <Select
          values={depositStructure}
          selectedValue="10%"
          labelName="Deposit Structure"
          name="deposit"
          {...register("deposit")}
          error={errors.deposit?.message}
        />
        {/* <Input
          type="number"
          label="Parking"
          name="parking"
          {...register("parking")}
          error={errors.parking?.message}
        /> */}
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
