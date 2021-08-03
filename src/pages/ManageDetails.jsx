import { ListingsLayout } from "../Layout";
import { Link } from "react-router-dom";
// import leftArrow from "../assets/leftArrow.svg";
import prop1 from "../assets/prop1.png";
import { Input } from "../atoms";

const ManageDetails = () => {
  return (
    <div>
      <ListingsLayout>
        <div className="m-auto mt-8 w-11/12">
          <section>
            <div className="flex w-full">
              <div className="w-4/12 mr-6">
                <Input
                  type="text"
                  label="Property Name"
                  placeholder="Silver Spring | Residence Phase II"
                />
              </div>
              <div className="w-4/12 mr-8">
                <Input
                  type="text"
                  label="Property Type"
                  placeholder="Residence"
                />
              </div>
              <div className="w-4/12">
                <Input type="text" label="City" placeholder="Ibeju" />
              </div>
            </div>

            <div className="">
              <div className="flex w-full">
                <div className="w-4/12 mr-8">
                  <Input type="text" label="Price" placeholder="₦3,499,000" />
                </div>
                <div className="w-4/12  mr-8">
                  <Input
                    type="text"
                    label="Area of the Property"
                    placeholder="Ibeju-Lekki, Lekki"
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
                    placeholder="Ibeju-Lekki, Lekki"
                  />
                </div>
                <div className="w-4/12  mr-8">
                  <Input
                    type="text"
                    label="Address Lane 2"
                    placeholder="Ibeju-Lekki, Lekki"
                  />
                </div>
              </div>
            </div>

            <div className="w-4/12">
              <Input type="text" label="Country" placeholder="Nigeria" />
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

          <div className="flex w-full justify-center items-center text-center mb-10">
            <Link to="/dashboard/listings/manageDetails" className="w-full">
              <button className="rounded-md p-4 text-white bg-primary font-semibold w-1/2">
                Save
              </button>
            </Link>
          </div>
        </div>
      </ListingsLayout>
    </div>
  );
};

export { ManageDetails };
