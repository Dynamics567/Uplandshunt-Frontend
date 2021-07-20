import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// import leftArrow from "../assets/leftArrow.svg";
import prop1 from "../assets/prop1.svg";
import { Input, Select } from "../atoms";
// import { ManageDetails } from "../organisms";

const propertyType = [
  ["Residence", "Residence"],
  ["Flat", "Flat"],
];
const availability = [
  ["Available", "Available"],
  ["Unavailable", "Unavailable"],
];

const EditNewListing = () => {
  const getManageDetailsPage = () => {
    window.scrollTo(0, 0);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Property Name is required"),
    price: Yup.string().required("Property price is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    postal_code: Yup.number().required("Postal code is required"),
    address_line_one: Yup.string().required("Address Lane 1 is required"),
    address_line_two: Yup.string().required("Address Lane 2 is required"),
    availability: Yup.string().required("Availability is required"),
    area: Yup.string().required("Area of the Property is required"),
    // list_type
    // status
    // bedroom
    // kitchen
    // parking
    // bathroom
    // trade_status
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  const createListing = (data) => {
    // setLoading(true);
    // axiosInstance
    //   .post("auth/forgot-password", data)
    //   .then(function (response) {
    //     console.log(response);
    //     setResponse(response.data.data);
    //     setLoading(false);
    //     // location.push("/resetpassword");
    //   })
    //   .catch(function (error) {
    //     if (error.response) {
    //       setError(error.response.data.data);
    //       setLoading(false);
    //     }
    //     // handle error
    //     // setError(error.status);
    //   });
    console.log(data);
  };
  return (
    <div className="">
      <form
        className="m-auto mt-8 w-11/12"
        onSubmit={handleSubmit(createListing)}
      >
        <section>
          <div className="flex w-full">
            <div className="w-4/12 mr-8">
              <Input
                type="text"
                label="Property Name"
                name="name"
                {...register("name")}
                error={errors.name?.message}
              />
            </div>
            <div className="w-4/12 mr-8">
              <Select
                values={propertyType}
                selectedValue="Residence"
                labelName="Property Type"
                name="name"
                {...register("name")}
                error={errors.name?.message}
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

          <div className="">
            <div className="flex w-full">
              <div className="w-4/12 mr-8">
                <Input
                  type="text"
                  label="Price"
                  name="price"
                  {...register("price")}
                  error={errors.price?.message}
                />
              </div>
              <div className="w-4/12  mr-8">
                <Input
                  type="text"
                  label="Area of the Property"
                  name="area"
                  {...register("area")}
                  error={errors.area?.message}
                />
              </div>
              <div className="w-4/12">
                <Select
                  values={availability}
                  selectedValue="Residence"
                  labelName="Availability"
                  name="availability"
                  {...register("availability")}
                  error={errors.availability?.message}
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex w-full">
              <div className="w-4/12 mr-8">
                <Input
                  type="text"
                  label="Address Lane 1"
                  name="address_line_one"
                  {...register("address_line_one")}
                  error={errors.address_line_one?.message}
                />
              </div>
              <div className="w-4/12  mr-8">
                <Input
                  type="text"
                  label="Address Lane 2"
                  name="address_line_two"
                  {...register("address_line_two")}
                  error={errors.address_line_two?.message}
                />
              </div>
              <div className="w-4/12">
                <Input
                  type="text"
                  label="Postal Code"
                  name="postal_code"
                  {...register("postal_code")}
                  error={errors.postal_code?.message}
                />
              </div>
            </div>
          </div>

          <div className="w-4/12">
            <Input
              type="text"
              label="Country"
              name="country"
              {...register("country")}
              error={errors.country?.message}
            />
          </div>
        </section>

        <div className="mb-12 mt-10">
          <p className="font-bold text-base mb-4">Images Of Properties</p>
          <div className="flex">
            <img src={prop1} alt="prop1" className="mr-4 w-1/2" />
            <img src={prop1} alt="prop1" className="mr-4 w-1/2" />
            <img src={prop1} alt="prop1" className=" w-1/2" />
          </div>
        </div>

        <div
          className="flex w-full justify-center items-center text-center mb-10"
          onClick={getManageDetailsPage}
        >
          <Link to="/dashboard/listings/manageDetails" className="w-full">
            <button className="rounded-md p-4 text-white bg-primary font-semibold w-1/2">
              Continue
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export { EditNewListing };
