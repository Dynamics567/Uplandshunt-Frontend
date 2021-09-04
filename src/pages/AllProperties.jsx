import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { axiosWithAuth } from "../Auth/Axios";
import { DashboardSectionTitle } from "../atoms";
import { axiosInstance } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";
import PropertyCard from "../templates/PropertyCard";

const AllProperties = () => {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  const getAllProperties = () => {
    setLoading(true);
    axiosInstance
      .get(`property?size=5&page=1`)
      .then((response) => {
        const results = response.data.data;
        const successMessage = response.data.message;
        setProperties(results);
        toast.success(successMessage);
        setLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          setLoading(false);
          const errorMessage = error.response.data.data;
          setError(errorMessage);
          console.log(errorMessage);
          toast.error(errorMessage);
        }
        // handle error
        setError(error.status);
      });
  };

  const saveProperty = (id) => {
    setSpinnerLoading(true);
    axiosWithAuth()
      .post(`property/save/${id}`)
      .then((response) => {
        const successMessage = response.data.data;
        toast.success(successMessage);
        setSpinnerLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.response.data.data;
        toast.error(errorMessage);
        setSpinnerLoading(false);
      });
  };

  useEffect(() => {
    getAllProperties();
  }, []);

  return (
    <div className="m-auto w-11/12 mt-10">
      <DashboardSectionTitle text="All Properties" showButton={false} />
      {loading ? (
        <DashboardLoader />
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {properties.map(({ id, name, price, city, images }) => {
            return (
              <div className="" key={id}>
                <PropertyCard
                  id={id}
                  place={name}
                  location={city}
                  price={price}
                  photo={images[0].image_url}
                  showSaveIcon={true}
                  saveProperty={() => saveProperty(id)}
                  loading={spinnerLoading}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export { AllProperties };
