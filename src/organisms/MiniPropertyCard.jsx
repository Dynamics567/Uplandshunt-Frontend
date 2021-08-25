import { useEffect, useState } from "react";

import placeholder from "../assets/placeholder.png";
import locationIcon from "../assets/location.svg";
import DashboardLoader from "../templates/DashboardLoader";
import { axiosInstance } from "../Auth/Axios";

const MiniPropertyCard = ({ id }) => {
  const [propertyDetails, setPropertyDetails] = useState("");
  const [loading, setLoading] = useState(true);

  const getPropertyDetails = () => {
    // setLoading(true);
    axiosInstance.get(`property/${id}`).then((response) => {
      const details = response.data.data;
      console.log(details);
      setPropertyDetails(details);
      setLoading(false);
    });
  };

  useEffect(() => {
    getPropertyDetails();
  }, []);

  if (loading) {
    return <DashboardLoader />;
  }

  const {
    name,
    price,
    city,
    // user: { first_name },
    // user: { last_name },
    // user: { email },
  } = propertyDetails;

  return (
    <>
      {loading ? (
        <DashboardLoader />
      ) : (
        <div
          className="my-6 m-auto w-11/12 p-4 flex justify-between rounded-md shadow-md"
          key={id}
        >
          <div className="flex">
            <img
              src={placeholder || propertyDetails.images[0].image_url}
              alt="property"
              className="rounded-md shadow-md mr-6 w-24"
            />
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <p className="font-bold text-base py-2">{name}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <img src={locationIcon} alt="location" className="mr-2" />
                  <p className="font-semibold text-sm">{city}</p>
                </div>
              </div>
              <p className="font-bold text-base py-2">₦{price}</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={placeholder || propertyDetails.user.avatar.url}
              alt="user avatar"
              className="rounded-full h-20"
            />
            <div className="">
              <p className="font-semibold text-base">
                {propertyDetails.user.first_name}{" "}
                {propertyDetails.user.last_name}
              </p>
              <p className="font-normal text-xs py-2 text-ash">
                {propertyDetails.user.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { MiniPropertyCard };
