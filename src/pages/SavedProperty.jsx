import { useState, useEffect } from "react";

import smallTown from "../assets/userDashboard/smallTown.svg";
import EmptyState from "../templates/EmptyState";
import { axiosWithAuth } from "../Auth/Axios";
import LoadSpinner from "../templates/LoadSpinner";
import { DashboardSectionTitle } from "../atoms";
import PropertyCard from "../templates/PropertyCard";
import placeholder from "../assets/placeholder.png";
import DashboardLoader from "../templates/DashboardLoader";

const SavedProperty = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");

  const getUserSavedProperties = () => {
    setLoading(false);
    axiosWithAuth()
      .get("property/save/all")
      .then(function (response) {
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
    getUserSavedProperties();
  }, []);

  // console.log(response);
  return (
    <>
      <DashboardSectionTitle text="My Saved Properties" showButton={false} />
      {loading ? (
        <LoadSpinner />
      ) : response.length === 0 ? (
        <EmptyState
          image={smallTown}
          text="You have not added any properties yet!"
          buttonText="Add New Listings"
        />
      ) : (
        <div className="m-auto w-11/12 grid grid-cols-3 gap-6">
          {response.map((property) => {
            return (
              <PropertyCard
                location={property.property.city}
                price={property.property.price}
                place={property.property.name}
                photo={placeholder || property.property.images[0].image_url}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export { SavedProperty };
