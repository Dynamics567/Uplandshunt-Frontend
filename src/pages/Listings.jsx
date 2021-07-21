import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "../Context";
import building from "../assets/userDashboard/building.svg";
import EmptyState from "../templates/EmptyState";
import { axiosInstance } from "../Auth/Axios";
import LoadSpinner from "../templates/LoadSpinner";
import { DashboardSectionTitle } from "../atoms";
import PropertyCard from "../templates/PropertyCard";

const Listings = () => {
  const [userListings, setUserListings] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");

  const userDetails = useAuthState();
  const userToken = userDetails.token;

  const getUserListings = () => {
    const config = {
      headers: { Authorization: `Bearer ${userToken}` },
    };

    setLoading(true);
    axiosInstance
      .get("/user/property", config)
      .then(function (response) {
        console.log(response);
        const properties = response.data.data;
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

  useEffect(() => {
    getUserListings();
  }, []);

  const propertiesToSell = response.filter(
    (property) => property.list_type === "sell"
  );

  const propertiesToRent = response.filter(
    (property) => property.list_type === "sell"
  );

  console.log(propertiesToRent);

  return (
    <>
      <DashboardSectionTitle
        text="Listings"
        buttonText="Add New Listings"
        buttonUrl="/dashboard/listings/edit"
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
            {propertiesToSell.map((property) => {
              // return property.images.map((image) => {
              return (
                <PropertyCard
                  location={property.city}
                  price={property.price}
                  place={property.name}
                  // photo={image[0]}
                />
              );
              // });
            })}
          </div>
          <p className="text-xl font-bold">Properties To Sell</p>
          <div className="grid grid-cols-4 gap-2 mt-6">
            {propertiesToRent.map((property) => {
              // return property.images.map((image) => {
              return (
                <PropertyCard
                  location={property.city}
                  price={property.price}
                  place={property.name}
                  // photo={image[0]}
                />
              );
              // });
            })}
          </div>
        </div>
      )}
    </>
  );
};

export { Listings };
