import { useEffect, useState } from "react";

import { axiosWithAuth, axiosInstance } from "../Auth/Axios";
import thunder from "../assets/userDashboard/thunder.png";
import DashboardLoader from "../templates/DashboardLoader";
import { PropertyCardTwo } from "./PropertyCardTwo";

const Boost = ({ id }) => {
  const [data, setData] = useState([]);
  const [propertyDetails, setPropertyDetails] = useState([]);
  const [loading, setLoading] = useState(false);

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
        console.log(details);
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

  //   if (loading) {
  //     return <DashboardLoader />;
  //   }

  const { name, price, city, images } = propertyDetails;
  console.log(images);
  return (
    <div className="">
      <p className="font-normal text-base text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
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
                // image_url={images[0].image_url}
              />
            </div>
            <p className="text-base font-normal py-4">
              Select any plan from the list below:
            </p>
            <div className="cursor-pointer w-full flex rounded-md">
              {data.map(({ category, id, price, time }) => {
                return (
                  <div
                    className="shadow-lg rounded-lg bg-white px-8 py-4 mr-16 hover:border-blue-500"
                    key={id}
                  >
                    <p className="text-center font-bold text-lg py-2">
                      {category}
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <img src={thunder} alt="boost" className="w-4 mr-4" />
                      <p className="font-normal text-base">
                        Boost for {time} hrs
                      </p>
                    </div>
                    <p className="text-center text-lg font-bold py-4">
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
