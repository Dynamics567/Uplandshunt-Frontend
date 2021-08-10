import { useState, useEffect } from "react";

import propertyQuestion from "../assets/userDashboard/propertyQuestion.svg";
import EmptyState from "../templates/EmptyState";
import { axiosWithAuth } from "../Auth/Axios";
import LoadSpinner from "../templates/LoadSpinner";
import { DashboardSectionTitle } from "../atoms";
import PropertyCard from "../templates/PropertyCard";

const PropertyRequest = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");

  const getUserSavedProperties = () => {
    setLoading(false);
    axiosWithAuth()
      .get("request")
      .then(function (response) {
        const properties = response.data.data;
        console.log(properties);
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
      <DashboardSectionTitle
        text="My Property Request"
        buttonText="Request a Property"
        buttonUrl="/dashboard/request/requestProperty"
      />
      {loading ? (
        <LoadSpinner />
      ) : response.length === 0 ? (
        <EmptyState
          image={propertyQuestion}
          text="You have not requested any properties yet!"
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

export { PropertyRequest };
