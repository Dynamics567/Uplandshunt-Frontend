import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useParams } from "react-router";

import { Modal } from "../organisms";
import interest from "../assets/interest.png";
import { axiosInstance, axiosWithAuth } from "../Auth/Axios";
import { Button, InputTwo } from "../atoms";

const Bids = () => {
  let { id } = useParams();
  const path = useLocation();

  const getUserDetails = JSON.parse(localStorage.getItem("auth"));
  const getUserAuthStatus = getUserDetails.isAuthenticated;

  const [bidsReceived, setBidsReceived] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    amount: Yup.string().required("Price is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  const getBidsReceived = () => {
    axiosInstance.get(`bid/${id}/bids`).then((response) => {
      const results = response.data.data[0].bids;
      setBidsReceived(results);
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const placeBid = (data) => {
    if (getUserAuthStatus) {
      let propertyId = { property_id: id };
      const userData = { ...propertyId, ...data };
      setLoading(true);
      return axiosWithAuth()
        .post(`bid`, userData)
        .then((response) => {
          const successMessage = response.data.data;
          toast.success(successMessage);
          setLoading(false);
        })
        .catch(function (error) {
          if (error.response) {
            setLoading(false);
            const errorMessage = error.response.data.data;
            console.log(error.response.data);
            reset();
            toast.error(errorMessage);
          }
        });
    } else {
      const currentPath = path.pathname;
      //Save data to sessionStorage
      sessionStorage.setItem("propertyPath", currentPath);
      window.scrollTo(0, 0);
      setShowModal(true);
    }
  };

  useEffect(() => {
    getBidsReceived();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6 m-auto mt-10 w-11/12">
      <Modal showModal={showModal} handleClose={handleClose} showButton={false}>
        <div className="text-center">
          <p className="font-bold text-lg my-4">
            Login or Register to place and save bid
          </p>
          <p className="font-normal text-sm text-ash">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tortor nisi, mattis quis purus at, mattis mattis ligula. Quisque vel
            ex convallis, eleifend erat imperdiet, lacinia dui. Mauris elementum
            efficitur nisl.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aenean tortor nisi, mattis quis purus at, mattis mattis
            ligula. Quisque vel ex convallis, eleifend erat imperdiet, lacinia
            dui. Mauris elementum efficitur nisl.
          </p>
          <div className="flex items-center justify-center my-4">
            <Link to="/register">
              <button className="font-bold text-base text-primary py-2 px-8 border border-primary rounded-md mr-6">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="font-bold text-base text-white bg-primary py-2 px-8 rounded-md">
                Login
              </button>
            </Link>
          </div>
        </div>
      </Modal>
      <img src={interest} alt="interest" />
      <div className="">
        <div className="p-4 flex justify-between bg-primary font-bold text-lg text-white rounded-tr-md rounded-tl-md">
          <p>Bids Received</p>
          <p className="rounded-full h-8 w-8 flex items-center justify-center text-primary bg-white">
            {bidsReceived.length}
          </p>
        </div>
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
          <p className="font-bold text-lg my-4 p-4">Place your bid</p>
          <p className="font-bold text-base px-4 mb-4">Price</p>
          <form onSubmit={handleSubmit(placeBid)}>
            <section className="m-auto w-11/12">
              <InputTwo
                register={register("amount")}
                error={errors.amount?.message}
              />
            </section>
            <div
              className="bg-primary m-auto w-11/12 rounded-md mb-4"
              onClick={placeBid}
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
      </div>
    </div>
  );
};

export default Bids;
