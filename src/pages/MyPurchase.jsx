import { useState, useEffect } from "react";

import { DashboardSectionTitle } from "../atoms";
import { PurchaseLayout } from "../Layout";
import DashboardLoader from "../templates/DashboardLoader";
import EmptyState from "../templates/EmptyState";
import houseSearch from "../assets/userDashboard/houseSearch.svg";
import { axiosWithAuth } from "../Auth/Axios";

const MyPurchase = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);

  // const getPropertyPurchased = () => {
  //   axiosWithAuth()
  //     .get("/transaction/property?tag=bought")
  //     .then((response) => {
  //       console.log(response);
  //     });
  // };

  // useEffect(() => {
  //   getPropertyPurchased();
  // }, []);

  return (
    <>
      <DashboardSectionTitle text="My Purchase" showButton={false} />
      <PurchaseLayout>
        {loading ? (
          <DashboardLoader />
        ) : response.length === 0 ? (
          <EmptyState
            image={houseSearch}
            text="You have not purchased any properties yet!!"
            buttonText="Add New Listings"
          />
        ) : (
          <div className="ml-4">
            <p className="text-xl font-bold">Properties To Sell</p>
            <div className="grid grid-cols-4 gap-2 mt-6">
              {/* {propertiesToSell.map(({ id, city, price, name, images }) => {
                return (
                  <PropertyCard
                    location={city}
                    price={price}
                    place={name}
                    photo={placeholder || images[0].image_url}
                    id={id}
                  />
                );
              })} */}
            </div>
            <p className="text-xl font-bold">Properties To Rent</p>
            <div className="grid grid-cols-4 gap-2 mt-6">
              {/* {propertiesToRent.map(({ id, city, price, name, images }) => {
                return (
                  <PropertyCard
                    location={city}
                    price={price}
                    place={name}
                    photo={placeholder || images[0].image_url}
                    id={id}
                  />
                );
              })} */}
            </div>
          </div>
        )}
      </PurchaseLayout>
    </>
  );
};

export { MyPurchase };
