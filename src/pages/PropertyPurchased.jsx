import { useState, useEffect } from "react";

import placeholder from "../assets/placeholder.png";
import { PurchaseLayout } from "../Layout";
import DashboardLoader from "../templates/DashboardLoader";
import { axiosWithAuth } from "../Auth/Axios";
import { propertyPurchased } from "../test";
import { PropertyCardThree } from "../organisms";

const PropertyPurchased = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);

  const getPropertyPurchased = () => {
    axiosWithAuth()
      .get("/transaction/property?tag=bought")
      .then((response) => {
        console.log(response.data.data);
      });
  };

  useEffect(() => {
    getPropertyPurchased();
  }, []);

  return (
    <PurchaseLayout>
      <>
        {loading ? (
          <DashboardLoader />
        ) : propertyPurchased.length === 0 ? (
          <p>No property purhased</p>
        ) : (
          <div className="ml-4">
            {propertyPurchased.map(
              ({ id, price, name, property, address_line_one }) => {
                return (
                  <PropertyCardThree
                    id={id}
                    price={price}
                    name={name}
                    image_url={placeholder || property.images[0].image_url}
                    city={address_line_one}
                    showPaymentHistory={true}
                    showDocument={false}
                    // amenities={property.amenities.map(({ id, name }) => {
                    //   return (
                    //     <div key={id} className="flex">
                    //       <p>{name}</p>
                    //     </div>
                    //   );
                    // })}
                  />
                );
              }
            )}
          </div>
        )}
      </>
    </PurchaseLayout>
  );
};

export { PropertyPurchased };
