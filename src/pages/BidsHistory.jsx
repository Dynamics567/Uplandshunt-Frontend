import { useState, useEffect } from "react";
import { axiosInstance, axiosWithAuth } from "../Auth/Axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import bin from "../assets/bin.png";
import { Button, InputTwo } from "../atoms";
import { bidsHistory } from "../data/subscription";
import LoadSpinner from "../templates/LoadSpinner";

const BidsHistory = ({ id }) => {
  const [active, setActive] = useState("tab1");
  const [allPropertyBids, setAllPropertyBids] = useState([]);
  const [myPropertyBid, setMyPropertyBid] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  let content;

  const validationSchema = Yup.object().shape({
    amount: Yup.string().required("Price is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  const getBidsReceived = () => {
    axiosInstance.get(`bid/${id}/bids`).then((response) => {
      const results = response.data.data[0].bids;
      setAllPropertyBids(results);
    });
  };

  const getBidsPlaced = () => {
    axiosWithAuth()
      .get(`bid/placed`)
      .then((response) => {
        const results = response.data.data;
        console.log(results);
        setMyPropertyBid(results);
      });
  };

  const deleteBids = (id) => {
    axiosWithAuth()
      .delete(`bid/${id}`)
      .then((response) => {
        const result = response.data;
        console.log(result);
        toast.success(result);
      })
      .catch(function (error) {
        if (error.response) {
          setSpinnerLoading(false);
          const errorMessage = error.response.data.data;
          setError(errorMessage);
          console.log(errorMessage);
          toast.error(errorMessage);
        }
        // handle error
        setError(error.status);
      });
  };

  if (active === "tab1") {
    content = (
      <div className="border border-b-name border-lightAsh">
        {allPropertyBids.map(({ id, price, updatedAt }) => {
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
    );
  } else {
    content = (
      <div className="border border-b-name border-lightAsh">
        {myPropertyBid.map((property) => {
          return (
            <div
              className="w-full flex items-center justify-between border-b border-lightAsh"
              key={property.id}
            >
              <p className="font-bold text-lg p-4">₦{property.price}</p>
              <p className="font-normal text-sm p-4">
                {new Date(property.updatedAt).toLocaleDateString()}
              </p>

              {spinnerLoading ? (
                <LoadSpinner />
              ) : (
                <div className="w-4 mr-4">
                  <img src={bin} className="w-10" />
                </div>
              )}
            </div>
          );
        })}
        <form onSubmit={handleSubmit()}>
          <section className="m-auto w-11/12">
            <InputTwo
              register={register("amount")}
              error={errors.amount?.message}
            />
          </section>
          <div
            className="bg-primary m-auto w-11/12 rounded-md mb-4"
            // onClick={placeBid}
          >
            {/* <button
                className=" text-white text-center text-base font-bold"
                onClick={placeBid}
              >
                Submit your bid
              </button> */}
            <Button loading={loading} buttonText="Submit your bid" />
          </div>
        </form>
      </div>
    );
  }

  useEffect(() => {
    getBidsReceived();
    getBidsPlaced();
  }, []);
  return (
    <>
      <div className="p-4 cursor-pointer flex justify-between bg-primary font-bold text-lg text-white rounded-tr-md rounded-tl-md">
        {bidsHistory.map((bidType, i) => {
          return (
            <>
              <div
                className={
                  bidType.label === active ? "activeBid" : "inactiveBid"
                }
                key={bidType.id}
                onClick={() => setActive(bidType.label)}
              >
                <p>{bidType.item}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="">{content}</div>
    </>
  );
};

export { BidsHistory };
