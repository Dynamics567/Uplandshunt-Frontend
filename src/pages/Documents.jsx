import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Document } from "../organisms";
import DashboardLoader from "../templates/DashboardLoader";
import { axiosInstance } from "../Auth/Axios";
import { ListingsLayout } from "../Layout";

const Documents = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  const getPropertyDocuments = () => {
    axiosInstance
      .get(`property/${id}`)
      .then(function (response) {
        // handle success
        const details = response.data.data.documents;
        setloading(false);
        setData(details);
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
    getPropertyDocuments();
  }, []);

  return (
    <>
      {loading ? (
        <DashboardLoader />
      ) : (
        <ListingsLayout>
          <div className="mt-8 border border-b-0 border-ashThree rounded-md">
            <div className="mt-2 p-4 grid grid-cols-3 gap-60 w-full mb-4 font-bold text-base border-b border-ashThree">
              <p>Document Name</p>
              <p>View Document</p>
              <p>Status</p>
            </div>
            {data.map((document) => {
              return <Document document={document} />;
            })}
          </div>
        </ListingsLayout>
      )}
    </>
  );
};

export { Documents };
