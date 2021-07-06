import { useHistory } from "react-router-dom";

import leftArrow from "../assets/leftArrow.svg";
import prop1 from "../assets/prop1.svg";
import { Input, Select } from "../atoms";

const propertyType = [
  ["Residence", "Residence"],
  ["Flat", "Flat"],
];
const availability = [
  ["Available", "Available"],
  ["Unavailable", "Unavailable"],
];

const EditNewListing = () => {
  const history = useHistory();
  return (
    <div className="m-auto w-11/12">
      <div
        className="cursor-pointer flex items-center po"
        onClick={() => {
          history.goBack();
        }}
      >
        <img src={leftArrow} alt="leftArrow" className="mt-2" />
        Back
      </div>
      <section>
        <div className="flex w-full">
          <div className="w-4/12 mr-8">
            <Input type="text" label="Property Name" />
          </div>
          <div className="w-4/12 mr-8">
            <Select
              values={propertyType}
              selectedValue="Residence"
              labelName="Property Type"
              // onValueChange={(val) => filterCategory(val)}
            />
          </div>
          <div className="w-4/12">
            <Input type="text" label="City" />
          </div>
        </div>

        <div className="">
          <div className="flex w-full">
            <div className="w-4/12 mr-8">
              <Input type="text" label="Price" />
            </div>
            <div className="w-4/12  mr-8">
              <Input type="text" label="Area of the Property" />
            </div>
            <div className="w-4/12">
              <Select
                values={availability}
                selectedValue="Residence"
                labelName="Availability"
                // onValueChange={(val) => filterCategory(val)}
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex w-full">
            <div className="w-4/12 mr-8">
              <Input type="text" label="Address Lane 1" />
            </div>
            <div className="w-4/12  mr-8">
              <Input type="text" label="Address Lane 2" />
            </div>
            <div className="w-4/12">
              <Input type="text" label="Postal Code" />
            </div>
          </div>
        </div>

        <div className="w-4/12">
          <Input type="text" label="Country" />
        </div>
      </section>

      <div className="mb-32 mt-10">
        <p className="font-bold text-base mb-4">Images Of Properties</p>
        <div className="flex">
          <img src={prop1} alt="prop1" className="mr-4 w-1/2" />
          <img src={prop1} alt="prop1" className="mr-4 w-1/2" />
          <img src={prop1} alt="prop1" className=" w-1/2" />
          {/* <img src={prop1} alt="prop1" /> */}
        </div>
      </div>
    </div>
  );
};

export { EditNewListing };
