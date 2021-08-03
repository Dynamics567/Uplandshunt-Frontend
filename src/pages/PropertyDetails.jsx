import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { HeaderTwo } from "../molecules";
import prop3 from "../assets/prop3.png";
import smallProp from "../assets/smallProp.png";
// import interest from "../assets/interest.png";
// import bid from "../assets/bid.png";
import love from "../assets/love.png";
import bidIcon from "../assets/bidIcon.png";
import location from "../assets/location.svg";
import listed from "../assets/listed.png";
import searchBy from "../assets/searchBy.png";
import detailsBedroom from "../assets/detailsBed.png";
import detailsBathroom from "../assets/detailsBathroom.png";
import detailsKitchen from "../assets/detailsKitchen.png";
import detailsParking from "../assets/detailsParking.png";
import { axiosInstance } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";
import { Footer } from "../organisms";

const PropertyDetails = () => {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [propertyDetails, setPropertyDetails] = useState([]);

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
    country,
    area,
    postal_code,
    status,
    geo_location: {
      geometry: {
        location: { lat, lng },
      },
    },
    // availability_status: { available: name },
    kitchens: { kitchen },
    bath: { bathroom },
    bed: { bedroom },
    // bed: { bedroom },
  } = propertyDetails;

  return (
    <div>
      {loading ? (
        <DashboardLoader />
      ) : (
        <>
          <HeaderTwo />
          <div className="m-auto mt-10 w-11/12 flex justify-between">
            <div className="mr-10" style={{ flex: "1" }}>
              <p className="font-bold text-base">{name}</p>
              <div className="w-full flex justify-between my-2">
                <section className="flex items-center">
                  <img src={location} alt="location" className="mr-2" />
                  <p className="font-semibold text-sm">{city}</p>
                </section>
                <p className="font-bold text-base">{price}/Year</p>
              </div>
              <div className="">
                <img
                  src={prop3}
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
                <div className="flex px-16 py-2 items-center justify-center rounded-md border border-primary mr-8">
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
                  src={`https://maps.google.com/maps?q=${lat}, ${lng}&z=15&output=embed`}
                  width="100%"
                  height="70%"
                  frameborder="0"
                  style={{ width: "100%", objectFit: "cover" }}
                ></iframe>
                <div className="flex w-full mt-4">
                  <img src={listed} alt="listed" className="w-1/2" />
                  <img src={searchBy} alt="searchBy" className="w-1/2" />
                </div>
              </div>
            </div>
            {/* voluptas nesciunt inventore obcaecati deleniti molestiae magni. */}
          </div>
          <section className="m-auto mt-16 w-11/12 border border-lightAsh">
            <p className="border-b border-ashThree font-bold text-lg p-4">
              Details
            </p>
            <p className="p-4 font-bold text-lg">Property Description</p>
            <p className="p-4 font-normal text-base">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur
              adipisci[ng]velit, sed quia non numquam [do] eius modi tempora
              inci[di]dunt, ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum[d]
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit,
              qui in ea voluptate velit esse, quam nihil molestiae consequatur,
              vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
              [33] At vero eos et accusamus et iusto odio dignissimos ducimus,
              qui blanditiis praesentium voluptatum deleniti atque corrupti,
              quos dolores et quas molestias excepturi sint, obcaecati
              cupiditate non provident, similique sunt in culpa, qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
              quidem rerum facilis est et expedita distinctio. Nam libero
              tempore
            </p>
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
        </>
      )}
      {/* <div className="p-4 flex w-full">
        <img src={interest} alt="interest" className="w-1/2" />
        <img src={bid} alt="bid" className="w-1/2" />
      </div> */}
      <Footer />
    </div>
  );
};

export { PropertyDetails };
