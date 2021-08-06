import { useState, useEffect } from "react";
import { ListingsLayout } from "../Layout";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router";

import prop1 from "../assets/prop1.png";
import EditPropertyForm from "../templates/EditPropertyForm";
import { axiosInstance } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";
import { Button } from "../atoms";

const EditDetails = () => {
  const { id } = useParams();
  const location = useHistory();
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);

  const getPropertyData = () => {
    axiosInstance
      .get(`property/${id}`)
      .then(function (response) {
        // handle success
        const details = response.data.data;
        setloading(false);
        setData(details);
        // console.log(details);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const editProperty = () => {
    location.push(`/dashboard/listings/userview/${id}`);
  };

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
            <EditPropertyForm preloadedValues={data} />
            <div className="mt-8">
              <div className="mb-12 mt-10">
                <p className="font-bold text-base mb-4">Images Of Properties</p>
                <div className="flex">
                  <img src={prop1} alt="prop1" className="mr-4 w-1/2" />
                  <img src={prop1} alt="prop1" className="mr-4 w-1/2" />
                  <img src={prop1} alt="prop1" className=" w-1/2" />
                </div>
              </div>

              <div className="flex w-full justify-center items-center text-center mb-10">
                <div className="w-1/2" onClick={editProperty}>
                  <Button loading={loading} buttonText="Save" />
                </div>
              </div>
            </div>
          </ListingsLayout>
        </div>
      )}
    </>
  );
};

export { EditDetails };
