import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import placeholder from "../assets/placeholder.png";
import building from "../assets/userDashboard/building.svg";
import EmptyState from "../templates/EmptyState";
import { axiosWithAuth } from "../Auth/Axios";
import LoadSpinner from "../templates/LoadSpinner";
import { DashboardSectionTitle } from "../atoms";
import PropertyCard from "../templates/PropertyCard";

const Listings = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [numberOfProperty, setNumberOfProperty] = useState("");

  const getUserListings = () => {
    setLoading(false);
    axiosWithAuth()
      .get("property/user/listing")
      .then(function (response) {
        const properties = response.data.data;
        // console.log(properties);
        setResponse(properties);
        setLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          setError(error.response.data.data);
          setLoading(false);
        }
        // handle error
        setError(error.status);
      });
  };

  const getUserSub = () => {
    setLoading(true);
    axiosWithAuth()
      .get("/subscription/active")
      .then((response) => {
        const results = response.data.data;
        setNumberOfProperty(results.plan.number_of_property);
        console.log(results);
      })
      .catch((error) => {
        const errorMessage = error.response.data.data;
        toast.error(errorMessage);
        setError(error);
      });
  };

  useEffect(() => {
    getUserListings();
    getUserSub();
  }, []);

  const propertiesToSell = response.filter(
    (property) => property.property_category.name === "Buy Property"
  );

  const propertiesToRent = response.filter(
    (property) => property.property_category.name === "Rent Property"
  );

  return (
    <>
      <DashboardSectionTitle
        text="Listings"
        buttonText="Add New Listings"
        buttonUrl="/dashboard/listings/edit"
        error={error}
        numberOfProperty={numberOfProperty}
        response={response}
      />
      {loading ? (
        <LoadSpinner />
      ) : response.length === 0 ? (
        <EmptyState
          image={building}
          text="You have not added any listings yet!"
          buttonText="Add New Listings"
        />
      ) : (
        <div className="ml-4">
          <p className="text-xl font-bold">Properties To Sell</p>
          <div className="grid grid-cols-4 gap-2 mt-6">
            {propertiesToSell.map(({ id, city, price, name, images }) => {
              return (
                <PropertyCard
                  location={city}
                  price={price}
                  place={name}
                  photo={placeholder || images[0].image_url}
                  id={id}
                />
              );
            })}
          </div>
          <p className="text-xl font-bold">Properties To Rent</p>
          <div className="grid grid-cols-4 gap-2 mt-6">
            {propertiesToRent.map(({ id, city, price, name, images }) => {
              return (
                <PropertyCard
                  location={city}
                  price={price}
                  place={name}
                  photo={placeholder || images[0].image_url}
                  id={id}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export { Listings };
