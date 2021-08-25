import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

import placeholder from "../assets/placeholder.png";
import { HeaderTwo } from "../molecules";
import smallProp from "../assets/smallProp.png";
import love from "../assets/love.png";
import bidIcon from "../assets/bidIcon.png";
import location from "../assets/location.svg";
import listed from "../assets/listed.png";
import detailsBedroom from "../assets/detailsBed.png";
import detailsBathroom from "../assets/detailsBathroom.png";
import detailsKitchen from "../assets/detailsKitchen.png";
import detailsParking from "../assets/detailsParking.png";
import { axiosInstance, axiosWithAuth } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";
import { Footer } from "../organisms";
import { Modal } from "../organisms";
import { Documents } from "./Documents";
import Bids from "../templates/Bids";

const PropertyDetails = ({
  showFooter = true,
  showHeader = true,
  showBids = true,
  showDocuments = false,
}) => {
  let { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState([]);
  // const [error, setError] = useState("");

  const getPropertyDetails = () => {
    axiosInstance
      .get(`property/${id}`)
      .then(function (response) {
        // handle success
        const details = response.data.data;
        setPropertyDetails(details);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getPropertyDetails();
  }, []);

  if (loading) {
    return <DashboardLoader />;
  }

  const {
    name,
    price,
    city,
    // country,
    description,
    area,
    postal_code,
    status,
    user: { first_name },
    user: { last_name },
    user: {
      avatar: { url },
    },
    // geo_location: {
    //   geometry: {
    //     location: { lat, lng },
    //   },
    // },
    // availability_status: { available: name },
    kitchens: { kitchen },
    bath: { bathroom },
    bed: { bedroom },
    // bed: { bedroom },
  } = propertyDetails;

  // const getUserDetails = JSON.parse(localStorage.getItem("auth"));
  // const getUserAuthStatus = getUserDetails.isAuthenticated;

  const saveProperty = () => {
    axiosWithAuth()
      .post(`property/save/${id}`)
      .then((response) => {
        const successMessage = response.data.data;
        console.log(successMessage);
        toast.success(successMessage);
      })
      .catch((error) => {
        const errorMessage = error.response.data.data;
        toast.error(errorMessage);
      });
  };

  const showDocument = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      {loading ? (
        <DashboardLoader />
      ) : (
        <div className="flex flex-col w-full justify-between">
          {showHeader && <HeaderTwo />}

          <div className="m-auto w-6/12">
            <Modal showModal={showModal}>
              <Documents showHeader={false} />
              <div className="flex justify-between">
                <button
                  handleClose={handleClose}
                  className="font-bold text-base text-white"
                >
                  Close
                </button>
              </div>
            </Modal>
            {/* <Modal ref={modal}>
              <div className="text-center">
                <p className="font-bold text-lg my-4">
                  Login or Register to place and save bid
                </p>
                <p className="font-normal text-sm text-ash">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean tortor nisi, mattis quis purus at, mattis mattis
                  ligula. Quisque vel ex convallis, eleifend erat imperdiet,
                  lacinia dui. Mauris elementum efficitur nisl.Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Aenean tortor nisi,
                  mattis quis purus at, mattis mattis ligula. Quisque vel ex
                  convallis, eleifend erat imperdiet, lacinia dui. Mauris
                  elementum efficitur nisl.
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
            </Modal> */}
          </div>

          <div className="m-auto mt-10 w-11/12 flex justify-between">
            <div className="mr-10" style={{ flex: "1" }}>
              <div className="w-full flex justify-between">
                <p className="font-bold text-base">{name}</p>
                {showDocuments && (
                  <p
                    className="text-primary font-bold text-lg cursor-pointer"
                    onClick={showDocument}
                  >
                    View Documents
                  </p>
                )}
              </div>
              <div className="w-full flex justify-between my-2">
                <section className="flex items-center">
                  <img src={location} alt="location" className="mr-2" />
                  <p className="font-semibold text-sm">{city}</p>
                </section>
                <p className="font-bold text-base">{price}/Year</p>
              </div>
              <div className="">
                <img
                  src={placeholder || propertyDetails.images[0].image_url}
                  alt="propertyPicture"
                  className="object-cover w-full"
                />
                <div className="flex mt-2 w-full">
                  <img src={smallProp} alt="smallProp" className="w-1/4 mr-2" />
                  <img src={smallProp} alt="smallProp" className="w-1/4 mr-2" />
                  <img src={smallProp} alt="smallProp" className="w-1/4 mr-2" />
                  <img src={smallProp} alt="smallProp" className="w-1/4 mr-2" />
                </div>
              </div>
              <div className="flex w-full mt-2">
                <img
                  src={detailsBedroom}
                  alt="detailsBedroom"
                  className="w-1/4"
                />
                <img
                  src={detailsKitchen}
                  alt="detailsKitchen"
                  className="w-1/4"
                />
                <img
                  src={detailsBathroom}
                  alt="detailsBathroom"
                  className="w-1/4"
                />
                <img
                  src={detailsParking}
                  alt="detailsParking"
                  className="w-1/4"
                />
              </div>
              <div className="flex mt-2">
                <div
                  onClick={saveProperty}
                  className="flex px-16 py-2 items-center justify-center rounded-md border border-primary mr-8 cursor-pointer"
                >
                  <img src={love} alt="love" className="w-4 mr-4" />
                  <p className="text-primary text-base font-bold">Save</p>
                </div>
                <div className="bg-primary flex px-16 py-2 items-center justify-center rounded-md border border-primary">
                  <img src={bidIcon} alt="bidIcon" className="w-4 mr-4" />
                  <p className="text-white text-base font-bold">Bid</p>
                </div>
              </div>
            </div>
            <div className="" style={{ flex: "1" }}>
              <div className="w-full h-full mt-16">
                <iframe
                  title="Property Location"
                  src={`https://maps.google.com/maps?q=, &z=15&output=embed`}
                  width="100%"
                  height="70%"
                  frameBorder="0"
                  style={{ width: "100%", objectFit: "cover" }}
                ></iframe>
                <div className="flex items-center w-full mt-4">
                  <div className="border border-ashThree rounded-md mr-4 ">
                    <p className="p-2 font-semibold text-lg border-b border-ashThree mb-2">
                      Property Listed By:
                    </p>
                    <div className="flex items-center p-2">
                      <img src={url} alt="url" className="w-1/2" />
                      <p className="font-bold text-2xl">
                        {first_name + " " + last_name}
                      </p>
                    </div>
                  </div>
                  <img src={listed} alt="listed" className="w-1/2" />
                  {/* <img src={searchBy} alt="searchBy" className="w-1/2" /> */}
                </div>
              </div>
            </div>
            {/* voluptas nesciunt inventore obcaecati deleniti molestiae magni. */}
          </div>
          <section className="m-auto mt-24 w-11/12 border border-lightAsh">
            <p className="border-b border-ashThree font-bold text-lg p-4">
              Details
            </p>
            <p className="p-4 font-bold text-lg">Property Description</p>
            <p className="p-4 font-normal text-base">{description}</p>
            <p className="px-4 py-2 font-bold text-lg">Property Details</p>
            <div className="grid grid-cols-4 gap-4 p-4 text-base font-semibold">
              <div className="">
                <p>Postal code: {postal_code}</p>
                <p>Availability: </p>
                <p>Date: </p>
              </div>
              <div className="">
                <p>
                  Amenities:
                  {/* <div className="flex">
                    {propertyDetails.amenities.map(({ id, name }) => {
                      return (
                        <div className="" key={id}>
                          <p>{name},</p>
                        </div>
                      );
                    })}
                  </div> */}
                </p>
                <p>Listing Type: </p>
                <p>Area: {area}sqm</p>
              </div>
              <div className="">
                <p>No of Bedrooms: {bedroom.slice(0, 1)}</p>
                <p>No of Bathrooms: {bathroom.slice(0, 1)}</p>
                <p>Kitchen: {kitchen.slice(0, 1)}</p>
              </div>
              <div className="">
                <p>Postal code: {postal_code}</p>
                <p>Selling Status: {status}</p>
                <p>Furnishing Type: </p>
              </div>
            </div>
          </section>
        </div>
      )}
      {showBids && <Bids />}
      {showFooter && <Footer />}
    </div>
  );
};

export { PropertyDetails };
