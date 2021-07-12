import { ListingsLayout } from "../Layout";
import prop1 from "../assets/userDashboard/smallProp.svg";
import location from "../assets/location.svg";
import amenities from "../assets/userDashboard/amenities.svg";
import map from "../assets/userDashboard/map.svg";
import searchBy from "../assets/userDashboard/searchBy.svg";
import rentedBy from "../assets/userDashboard/rentedBy.svg";
import saveButton from "../assets/userDashboard/saveButton.svg";
import shareButton from "../assets/userDashboard/shareButton.svg";
import details from "../assets/userDashboard/details.svg";
import call from "../assets/userDashboard/call.svg";

const UserView = () => {
  return (
    <ListingsLayout>
      <div className="m-auto w-full mt-6">
        <p className="font-semibold text-lg">
          ABC residence 3 BHK Residential Apartment for Rent in Lagos
        </p>
        <section className="flex items-center justify-between w-full">
          <div className="mr-6" style={{ flex: "1" }}>
            <div className="w-full items-center flex justify-between">
              <section className="flex items-center w-full my-4">
                <img src={location} alt="location" className="mr-2" />
                <p className="font-semibold text-ash text-sm">
                  Ibeju-Lekki, Lekki
                </p>
              </section>
              <p className="font-bold text-base">₦3,499,000/Year</p>
            </div>
            <img src={prop1} alt="prop1" />
            <div className="mt-4">
              <img src={amenities} alt="amenities" className="" />
            </div>
            <div className="flex">
              <img src={saveButton} alt="saveButton" className="mr-4" />
              <img src={shareButton} alt="shareButton" />
            </div>
          </div>
          <div className="" style={{ flex: "1" }}>
            <img src={map} alt="map" />
            <div className="flex mt-12">
              <img src={rentedBy} alt="rentedBy" className="w-1/2" />
              <img src={searchBy} alt="searchBy" className="w-1/2" />
            </div>
          </div>
        </section>
      </div>

      <section>
        <img src={details} alt="details" className="mt-10" />
      </section>

      <div className="flex justify-center items-center my-8">
        <img src={call} alt="call" className="w-1/2" />
      </div>
    </ListingsLayout>
  );
};

export { UserView };
