import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import placeholder from "../assets/placeholder.png";
import { axiosWithAuth, axiosInstance } from "../Auth/Axios";
import thunder from "../assets/userDashboard/thunder.png";
import DashboardLoader from "../templates/DashboardLoader";
import { PropertyCardTwo } from "./PropertyCardTwo";

const Boost = ({ id }) => {
  const location = useLocation();

  const [data, setData] = useState([]);
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authUrl, setAuthUrl] = useState("");

  const getBoostingPlans = () => {
    setLoading(true);
    axiosWithAuth()
      .get("boost/plans")
      .then((response) => {
        const results = response.data.data;
        setData(results);
        setLoading(false);
      });
  };

  const getPropertyDetails = () => {
    axiosInstance
      .get(`property/${id}`)
      .then(function (response) {
        // handle success
        const details = response.data.data;
        // console.log(details);
        setLoading(false);
        setPropertyDetails(details);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getBoostingPlans();
    getPropertyDetails();
  }, []);

  const callBack = window.location.origin;

  const boostProperty = (planId) => {
    setLoading(true);
    const boostObject = {
      property_id: id,
      boost_plan_id: planId,
      call_back_url: `${callBack}/paymentSuccess`,
    };
    axiosWithAuth()
      .post("boost", boostObject)
      .then((response) => {
        const successMessage = response.data.data;
        setAuthUrl(successMessage.authorization_url);
        // console.log(successMessage);
        setLoading(false);
        // console.log(typeof authUrl);
        // window.location.replace(authUrl);
        window.open(authUrl, "_blank");
      });
  };

  // if (loading) {
  //   return <DashboardLoader />;
  // }

  const { name, price, city, images } = propertyDetails;

  return (
    <div className="">
      <p className="font-normal text-sm text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type
      </p>
      <>
        {loading ? (
          <DashboardLoader />
        ) : (
          <>
            <div className="">
              <PropertyCardTwo
                price={price}
                city={city}
                name={name}
                image_url={placeholder || images[0].image_url}
              />
            </div>
            <p className="text-base font-normal py-2">
              Select any plan from the list below:
            </p>
            <div className="cursor-pointer w-full flex rounded-md">
              {data.map((plan) => {
                return (
                  <div
                    className="shadow-lg rounded-lg bg-white p-4 my-4 mr-16 hover:border-blue-500"
                    key={plan.id}
                    onClick={() => boostProperty(plan.id)}
                  >
                    <p className="text-center font-bold text-lg py-2">
                      {plan.category}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <img src={thunder} alt="boost" className="w-4 mr-4" />
                      <p className="font-normal text-sm">
                        Boost for {plan.time} hrs
                      </p>
                    </div>
                    <p className="text-center text-base font-bold py-4">
                      ₦{price}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </>
    </div>
  );
};

export { Boost };
