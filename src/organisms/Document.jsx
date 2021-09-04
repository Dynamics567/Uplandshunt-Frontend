import { useState } from "react";
import { toast } from "react-toastify";

import eye from "../assets/userDashboard/eye.png";
import file from "../assets/userDashboard/file.png";
import bin from "../assets/bin.png";
import { axiosWithAuth } from "../Auth/Axios";
import LoadSpinnerTwo from "../templates/LoadSpinnerTwo";
import { Link } from "react-router-dom";

const Document = ({ document, id }) => {
  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const [spinnerLoadingTwo, setSpinnerLoadingTwo] = useState(false);
  const [error, setError] = useState(false);
  const deleteProperty = (docId) => {
    setSpinnerLoading(true);
    axiosWithAuth()
      .delete(`property/${id}/documents/${docId}`)
      .then((response) => {
        const result = response.data.data;
        console.log(result);
        toast.success(result);
        setSpinnerLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          setSpinnerLoading(false);
          const errorMessage = error.response.data.data;
          setError(errorMessage);
          toast.error(errorMessage);
        }
        // handle error
        setError(error.status);
      });
  };
  return (
    <div
      key={document.id}
      className="p-4 grid grid-cols-4 mb-4 font-normal text-base border-b border-ashThree"
    >
      <div className="flex">
        <img src={file} alt="file" className="w-4 mr-2" />
        <p>{document.name}</p>
      </div>
      <div className="cursor-pointer flex items-center justify-center">
        <a href={document.image_url} target="_blank" className="">
          <img src={eye} alt="" className="w-4" />
        </a>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="w-1/2 uppercase text-white rounded-3xl px-2 py-1 text-xs"
          style={{
            backgroundColor:
              document.status === "approved"
                ? "#29CC97"
                : document.status === "pending"
                ? "black"
                : "#B3404A",
          }}
        >
          {document.status}
        </button>
      </div>
      <div className="flex items-center">
        <Link to={`/dashboard/listings/documentUpdate/${document.id}`}>
          <button className="bg-white rounded-2xl py-2 px-4 mr-4 text-primary uppercase border border-primary text-xs">
            {spinnerLoadingTwo ? <LoadSpinnerTwo /> : "Update"}
          </button>
        </Link>
        <div
          className="cursor-pointer"
          onClick={() => deleteProperty(document.id)}
        >
          {spinnerLoading ? (
            <LoadSpinnerTwo />
          ) : (
            <img src={bin} alt="bin" className="w-4" />
          )}
        </div>
      </div>
    </div>
  );
};

export { Document };
