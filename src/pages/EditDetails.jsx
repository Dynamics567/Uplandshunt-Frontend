import { useState, useEffect } from "react";
import { ListingsLayout } from "../Layout";
import { useParams } from "react-router";

import EditPropertyForm from "../templates/EditPropertyForm";
import { axiosInstance } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";

const EditDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setloading] = useState(true);

  const getPropertyData = () => {
    axiosInstance
      .get(`property/${id}`)
      .then(function (response) {
        // handle success
        const details = response.data.data;
        const propertyImages = details.images;
        setloading(false);
        setData(details);
        setImages(propertyImages);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  console.log(images);

  useEffect(() => {
    // const fetchData = async () => {
    //   setData(await getPropertyData);
    // };
    getPropertyData();
    // fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <DashboardLoader />
      ) : (
        <div className="m-auto w-11/12">
          <ListingsLayout>
            <EditPropertyForm preloadedValues={data} images={images} />
          </ListingsLayout>
        </div>
      )}
    </>
  );
};

export { EditDetails };
