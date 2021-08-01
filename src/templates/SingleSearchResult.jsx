import { Link } from "react-router-dom";

import prop2 from "../assets/prop2.svg";
import locationIcon from "../assets/location.svg";
import call from "../assets/call.png";

const SingleSearchResult = ({ searches }) => {
  return (
    <div
      className="mb-6 p-2 rounded-md border border-lightAsh"
      style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
    >
      <div key={searches.id} className="flex border-b border-lightAsh">
        <div className="w-full mr-6">
          <img src={prop2} alt="prop2" className="w-full rounded-md" />
        </div>
        <section>
          <p className="font-bold text-base">{searches.name}</p>
          <div className="flex items-center">
            <img src={locationIcon} alt="location" className="mr-2" />
            <p className="font-semibold text-sm">{searches.city}</p>
          </div>
          <p className="font-light text-xs">
            The COVID19 pandemic has made us all understand the importance of
            sanitization and not take it for granted. Rest assured, our
            properties are following a number of hygiene measures like
            disinfecting surfaces with high-quality disinfectants, following
            social distance, minimizing physical contact in interactions, using
            protective gear like masks, gloves, etc. and more.
          </p>
          <div className="w-full mt-4 flex justify-between font-semibold">
            Amenities:
            {searches.amenities.map((amenity) => {
              return (
                <div>
                  <p>{amenity.name}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div className="w-full flex justify-between items-center mt-4">
        <div className="">
          <p className="font-bold text-base mr-6">₦{searches.price}/Year</p>
        </div>
        <div className="flex w-full">
          <Link
            to={`/propertydetails/${searches.id}`}
            className=" px-12 py-2 items-center justify-center rounded-md border border-primary mr-8"
          >
            <p className="text-primary text-base font-bold">
              View More Details
            </p>
          </Link>
          <div className="bg-primary flex px-12 py-2 items-center justify-center rounded-md border border-primary mr-8">
            <img src={call} alt="love" className="w-4 mr-4" />
            <p className="text-white text-base font-bold">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleSearchResult };
