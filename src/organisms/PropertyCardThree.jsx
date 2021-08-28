import { useHistory } from "react-router-dom";

import locationIcon from "../assets/location.svg";
import payIcon from "../assets/userDashboard/payIcon.png";

const PropertyCardThree = ({
  id,
  price,
  name,
  image_url,
  city,
  amenities,
  showPaymentHistory = false,
  showDocument = false,
}) => {
  const location = useHistory();

  const viewBidsHistory = (id) => {
    location.push(`/dashboard/request/bidsPlaced/viewbids/${id}`);
  };

  return (
    <div className="my-6 p-4 flex rounded-md shadow-md" key={id}>
      <img
        src={image_url}
        alt="property"
        className="rounded-md shadow-md mr-6"
      />
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <p className="font-bold text-base py-2">{name}</p>
          {showDocument && (
            <p className="font-bold text-base">Documents Recieved</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <img src={locationIcon} alt="location" className="mr-2" />
            <p className="font-semibold text-sm">{city}</p>
          </div>
          {showPaymentHistory && (
            <div className="">
              <img src={payIcon} alt="payIcon" className="w-32" />
              <p
                className="font-semibold text-xs text-primary cursor-pointer mt-2"
                // onClick={() => viewBidsHistory(id)}
              >
                View Payment History
              </p>
            </div>
          )}
        </div>
        <p className="font-bold text-base py-2">₦{price}</p>
        <div className="flex">
          Amenities:
          <p className="font-normal text-base py-2">{amenities}</p>
        </div>
      </div>
    </div>
  );
};

export { PropertyCardThree };
