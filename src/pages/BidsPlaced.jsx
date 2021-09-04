import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import wallet from "../assets/wallet.svg";
import { PropertyRequestLayout } from "../Layout";
import { axiosWithAuth } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";
import LoadSpinnerTwo from "../templates/LoadSpinnerTwo";

const BidsPlaced = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const [error, setError] = useState("");

  const callBack = window.location.origin;

  const buyerAcceptBid = (id) => {
    const dataObject = {
      call_back_url: `${callBack}/paymentSuccess`,
    };
    axiosWithAuth()
      .post(`bid/${id}/accept`, dataObject)
      .then((response) => {
        const successMessage = response.data;
        const authUrl = successMessage.data.authorization_url;
        setSpinnerLoading(false);
        window.open(authUrl, "_blank");
      })
      .catch(function (error) {
        if (error.response) {
          setSpinnerLoading(false);
          const errorMessage = error.response.data.data;
          console.log(error.response.data);
          // Object.values(errorMessage.errors)
          //   .flat()
          //   .map((err) => {
          //     toast.error(err);
          //   });
          // setError(errorMessage);
        }
      });
  };

  const getBidsPlaced = () => {
    setLoading(true);
    axiosWithAuth()
      .get("bid/placed")
      .then((response) => {
        const results = response.data.data;
        // console.log(results);
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
          <div className="mt-10 m-auto font-bold text-base border border-ash rounded-md text-center">
            <div className="grid grid-cols-6 gap-5 border-b border-ashThree py-4">
              <p>Property Name</p>
              <p>Date</p>
              <p>Price</p>
              <p>Trade Status</p>
              <p>Bid Status</p>
              <p>Action</p>
            </div>
            {properties.map((property) => {
              return (
                <div
                  key={property.id}
                  className="p-4 grid grid-cols-6 mb-4 font-normal text-base border-b border-ashThree"
                >
                  <p>{property.property.name}</p>
                  <p>{new Date(property.updatedAt).toLocaleDateString()}</p>
                  <p className="font-semibold text-base">
                    ₦{property.property.price}
                  </p>
                  <div className="flex items-center justify-center">
                    <button
                      className="uppercase text-white rounded-3xl px-4 py-1 text-xs"
                      style={{
                        backgroundColor:
                          property.property.trade_status === "completed"
                            ? "#29CC97"
                            : property.property.trade_status === "pending"
                            ? "black"
                            : "#B3404A",
                      }}
                    >
                      {property.property.trade_status || "Inactive"}
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="uppercase text-white rounded-3xl px-4 py-1 text-xs"
                      style={{
                        backgroundColor:
                          property.property.status === "active"
                            ? "#29CC97"
                            : property.property.status === "pending"
                            ? "black"
                            : "#B3404A",
                      }}
                    >
                      {property.property.status}
                    </button>
                  </div>
                  {spinnerLoading ? (
                    <LoadSpinnerTwo />
                  ) : (
                    <div
                      className="flex items-center justify-center border border-primary rounded-3xl px-2 py-2"
                      onClick={() => buyerAcceptBid(property.id)}
                    >
                      <img src={wallet} alt="wallet" className="mr-4" />
                      <button className=" uppercase font-bold text-sm">
                        Pay
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </PropertyRequestLayout>
      )}
    </>
  );
};

export { BidsPlaced };
