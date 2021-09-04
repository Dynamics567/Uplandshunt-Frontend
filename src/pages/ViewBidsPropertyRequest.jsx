import { useState } from "react";
import { useParams } from "react-router";

import { axiosInstance } from "../Auth/Axios";
import { PropertyDetails } from "./PropertyDetails";
import interest from "../assets/interest.png";
import { BidsHistory } from "./BidsHistory";

const ViewBidsPropertyRequest = () => {
  let { id } = useParams();
  //   const path = useLocation();

  const [bidsReceived, setBidsReceived] = useState([]);

  // const getBidsReceived = () => {
  //   axiosInstance.get(`bid/${id}/bids`).then((response) => {
  //     const results = response.data.data[0].bids;
  //     setBidsReceived(results);
  //   });
  // };

  return (
    <div>
      <PropertyDetails
        showHeader={false}
        showFooter={false}
        showBids={false}
        showDocuments={true}
      />
      <section className="grid my-16 grid-cols-2 gap-6 mt-10 m-auto w-11/12">
        <img src={interest} alt="interest" />

        <div className="">
          <BidsHistory id={id} />
          <div className="border border-b-name border-lightAsh">
            {bidsReceived.map(({ id, price, updatedAt }) => {
              return (
                <div
                  className="w-full flex justify-between border-b border-lightAsh"
                  key={id}
                >
                  <p className="font-bold text-lg p-4">₦{price}</p>
                  <p className="font-normal text-sm p-4">
                    {new Date(updatedAt).toLocaleDateString()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export { ViewBidsPropertyRequest };
