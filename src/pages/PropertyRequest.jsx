import { useState, useEffect } from "react";

import propertyQuestion from "../assets/userDashboard/propertyQuestion.svg";
import EmptyState from "../templates/EmptyState";
import { axiosWithAuth } from "../Auth/Axios";
import LoadSpinner from "../templates/LoadSpinner";
import { DashboardSectionTitle } from "../atoms";

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

  useEffect(() => {
    getUserSavedProperties();
  }, []);

  return (
    <>
      <DashboardSectionTitle
        text="My Property Requests"
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
        <div className="mt-8 m-auto w-11/12 border border-b-0 border-ashThree rounded-md">
          <div
            className="mt-2 p-4 grid grid-cols-5 gap-6 mb-4 font-bold text-base border-b border-ashThree"
            style={{ flex: "1" }}
          >
            <p>Property Name</p>
            <p>Message</p>
            <p>Date</p>
            <p>Price</p>
            <p>Status</p>
          </div>
          {response.map((request) => {
            return (
              <div
                key={request.id}
                className="p-4 grid grid-cols-5 gap-6 mb-4 font-normal text-base border-b border-ashThree"
              >
                <p>{request.property.name}</p>
                <p>{request.message}</p>
                <p>{new Date(request.createdAt).toLocaleDateString()}</p>
                <p className="font-semibold text-base">
                  ₦{request.property.price}
                </p>
                <div className="flex items-center justify-start">
                  <button
                    className="w-1/2 uppercase text-white rounded-3xl px-2 py-1 text-xs"
                    style={{
                      backgroundColor:
                        request.status === "active"
                          ? "#29CC97"
                          : request.status === "pending"
                          ? "black"
                          : "#B3404A",
                    }}
                  >
                    {request.status}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export { PropertyRequest };
