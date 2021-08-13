import { useEffect, useState } from "react";

import placeholder from "../assets/placeholder.png";
import { PropertyRequestLayout } from "../Layout";
import { axiosWithAuth } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";
import { PropertyCardTwo } from "../organisms";

const BidsPlaced = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBidsPlaced = () => {
    setLoading(true);
    axiosWithAuth()
      .get("bid/placed")
      .then((response) => {
        const results = response.data.data;
        console.log(results);
        setProperties(results);
        setLoading(false);
      });
  };

  useEffect(() => {
    getBidsPlaced();
  }, []);

  return (
    <>
      {loading ? (
        <DashboardLoader />
      ) : (
        <PropertyRequestLayout>
          <div className="mt-10 m-auto w-11/12">
            {properties.map(({ price, property }) => {
              console.log(property.address_line_one);
              return (
                <PropertyCardTwo
                  id={property.id}
                  price={price}
                  name={property.name}
                  image_url={placeholder || property.imges[0].image_url}
                  city={property.address_line_one}
                  showBidsHistory={true}
                  showDocument={true}
                  amenities={property.amenities.map(({ id, name }) => {
                    return (
                      <div key={id} className="flex">
                        <p>{name}</p>
                      </div>
                    );
                  })}
                />
              );
            })}
          </div>
        </PropertyRequestLayout>
      )}
    </>
  );
};

export { BidsPlaced };
