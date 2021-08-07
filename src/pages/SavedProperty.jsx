import { useState, useEffect } from "react";

import smallTown from "../assets/userDashboard/smallTown.svg";
import EmptyState from "../templates/EmptyState";
import { axiosWithAuth } from "../Auth/Axios";
import LoadSpinner from "../templates/LoadSpinner";
import { DashboardSectionTitle } from "../atoms";
import PropertyCard from "../templates/PropertyCard";

const SavedProperty = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");

  const getUserSavedProperties = () => {
    setLoading(false);
    axiosWithAuth()
      .get("property/user/listing")
      .then(function (response) {
        const properties = response.data.data;
        // console.log(properties);
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
        <div className="ml-4">
          <p className="text-xl font-bold">Properties To Sell</p>
          <div className="grid grid-cols-4 gap-2 mt-6"></div>
        </div>
      )}
    </>
  );
};

export { SavedProperty };
