import { useEffect, useState } from "react";
import { useParams } from "react-router";

import prop3 from "../assets/prop3.svg";
import listed from "../assets/listed.png";
import searchBy from "../assets/searchBy.png";
import detailsBedroom from "../assets/detailsBed.png";
import detailsBathroom from "../assets/detailsBathroom.png";
import detailsKitchen from "../assets/detailsKitchen.png";
import detailsParking from "../assets/detailsParking.png";
import { axiosInstance } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";

const PropertyDetails = () => {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState([]);

  const getPropertyDetails = () => {
    axiosInstance
      .get(`property/${id}`)
      .then(function (response) {
        // handle success
        const details = response.data.data;
        setPropertyDetails(details);
        console.log(details);
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

  const { name, price, city, country, postal_code, status } = propertyDetails;

  return (
    <div>
      {loading ? (
        <DashboardLoader />
      ) : (
        <>
          <div className="m-auto mt-10 w-11/12 grid grid-cols-2">
            <div className="">
              <p>{name}</p>
              <img
                src={prop3}
                alt="propertyPicture"
                className="object-contain"
              />
              <div className="flex w-32 h-20">
                <img src={detailsBedroom} alt="detailsBedroom" className="" />
                <img src={detailsKitchen} alt="detailsKitchen" />
                <img src={detailsBathroom} alt="detailsBathroom" />
                <img src={detailsParking} alt="detailsParking" />
              </div>
            </div>
            <div className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              voluptatem excepturi unde illo incidunt placeat, dolorum ratione!
              Quod perferendis voluptatibus laboriosam atque nihil. Nemo, error,
              rerum enim nostrum sequi accusantium nihil quidem eligendi
              <div className="flex w-56 h-36">
                <img src={listed} alt="listed" />
                <img src={searchBy} alt="" />
              </div>
            </div>
            voluptas nesciunt inventore obcaecati deleniti molestiae magni.
          </div>
          <section className="m-auto w-11/12">
            <p>Details</p>
            <p>Property Description</p>
            <p>
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
            <p>Property Details</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="">
                <p>Postal code:{postal_code}</p>
                <p>Availability:</p>
                <p>Date:</p>
              </div>
              <div className="">
                <p>Amenities:</p>
                <p>Listing Type:</p>
                <p>Area:</p>
              </div>
              <div className="">
                <p>No of Bedrooms:</p>
                <p>No of Bathrooms:</p>
                <p>Kitchen:</p>
              </div>
              <div className="">
                <p>Postal code:{postal_code}</p>
                <p>Selling Status:{status}</p>
                <p>Furnishing Type:</p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export { PropertyDetails };
