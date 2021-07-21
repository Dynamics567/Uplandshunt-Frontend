import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "../Context";
import building from "../assets/userDashboard/building.svg";
import EmptyState from "../templates/EmptyState";
import { axiosInstance } from "../Auth/Axios";
import LoadSpinner from "../templates/LoadSpinner";
import { DashboardSectionTitle } from "../atoms";

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

  console.log(propertiesToRent, propertiesToSell);

  return (
    <>
      <DashboardSectionTitle
        text="Listings"
        buttonText="Add New Listings"
        buttonUrl="/dashboard/listings/edit"
      />
      {loading ? ( //response
        <LoadSpinner /> //loader
      ) : response.length === 0 ? (
        <EmptyState //if there are no properties
          image={building}
          text="You have not added any listings yet!"
          buttonText="Add New Listings"
        />
      ) : (
        <div>
          <p className="text-xl font-bold">Properties To Sell</p>
          {propertiesToSell.map((property) => {
            return <p>{property.name}</p>;
          })}
          <p className="text-xl font-bold">Properties To Sell</p>
          {propertiesToRent.map((property) => {
            return <p>{property.name}</p>;
          })}
        </div>
      )}
    </>
  );
};

export { Listings };

// {loading ? ( //response
//   <EmptyState
//     image={building}
//     text="You have not added any listings yet!"
//     buttonText="Add New Listings"
//     buttonUrl="/dashboard/listings/edit"
//   />
// ) : response ? (
//   <div></div>
// ) : (
// <LoadSpinner />
// )}
