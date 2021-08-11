import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import { axiosWithAuth } from "../Auth/Axios";
import { ListingsLayout } from "../Layout";
import { Document } from "../organisms";
import DashboardLoader from "../templates/DashboardLoader";
import { Modal } from "./Modal";

const BidsRecieved = () => {
  const { id } = useParams();
  const modal = useRef(null);

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  const getBidsReceived = () => {
    axiosWithAuth()
      .get(`bid/${id}/bids`)
      .then((response) => {
        const results = response.data.data[0].bids;
        console.log(results);
        setData(results);
        setloading(false);
      });
  };

  useEffect(() => {
    getBidsReceived();
  }, []);

  // const showDocument = () => {
  //   // modal.current.open();
  //   console.log("works");
  // };

  return (
    <>
      {loading ? (
        <DashboardLoader />
      ) : (
        <div>
          <ListingsLayout>
            <Modal ref={modal}>
              {/* <Document /> */}
              <p>test</p>
            </Modal>
            <div className="mt-8 border border-b-0 border-ashThree rounded-md">
              <div
                className="mt-2 p-4 grid grid-cols-4 gap-20 mb-4 font-bold text-base border-b border-ashThree"
                style={{ flex: "1" }}
              >
                <p>Name</p>
                <p>Bid Date</p>
                <p>Bid Price</p>
                <p>Status</p>
              </div>
              {data.map((bid) => {
                return (
                  <div
                    key={bid.id}
                    className="p-4 grid grid-cols-4 gap-20 mb-4 font-normal text-base border-b border-ashThree"
                  >
                    <div className="flex items-center">
                      <img
                        src={bid.user.avatar.url}
                        alt="user-avatar"
                        className="rounded-full w-8 mr-2"
                      />
                      <div className="">
                        <p className="font-semibold text-base">
                          {bid.user.first_name + " " + bid.user.last_name}
                        </p>
                        <p className="font-normal text-xs text-ash">
                          {bid.user.email}
                        </p>
                      </div>
                    </div>
                    <p>{new Date(bid.updatedAt).toLocaleDateString()}</p>
                    <p className="font-semibold text-base">₦{bid.price}</p>
                    <div
                      className="flex items-center justify-start"
                      // onClick={() => modal.current.open()}
                    >
                      <button className="uppercase text-green text-xs font-bold border border-green p-2 rounded-2xl">
                        Accept Trade
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </ListingsLayout>
        </div>
      )}
    </>
  );
};

export { BidsRecieved };
