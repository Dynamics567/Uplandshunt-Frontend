import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import eye from "../assets/userDashboard/eye.png";
import file from "../assets/userDashboard/file.png";
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
            {data.map(({ id, name, image_url, status }) => {
              return (
                <div
                  key={id}
                  className="p-4 grid grid-cols-3 gap-28 mb-4 font-normal text-base border-b border-ashThree"
                >
                  <div className="flex">
                    <img src={file} alt="file" className="w-4 mr-2" />
                    <p>{name}</p>
                  </div>
                  <div className="cursor-pointer flex items-center justify-center">
                    <a href={image_url} target="_blank" className="">
                      <img src={eye} alt="" className="w-4" />
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="w-1/2 uppercase text-white rounded-3xl px-2 py-1 text-xs"
                      style={{
                        backgroundColor:
                          status === "approved"
                            ? "#29CC97"
                            : status === "pending"
                            ? "black"
                            : "#B3404A",
                      }}
                    >
                      {status}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </ListingsLayout>
      )}
    </>
  );
};

export { Documents };
