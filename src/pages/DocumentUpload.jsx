import { useState } from "react";
import SimpleDropZone from "../templates/SimpleDropZone";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "../atoms";
import { axiosWithAuth, axiosInstance } from "../Auth/Axios";

const DocumentUpload = (imageTitle) => {
  let { id } = useParams();
  const location = useHistory();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (files) => {
    const fileNames = files.map((file) => file.file);

    // console.log(fileNames);
    const formdata = new FormData();
    formdata.append("file", fileNames[0]);
    formdata.append("document_name", "test");
    console.log(formdata);
    // console.log(formdata);
    // axiosWithAuth()
    //   .post(`property/${id}/documents`, formdata)
    //   .then((response) => {
    //     const successMessage = response.data.data;
    //     console.log(successMessage);
    //     toast.success(successMessage);
    //   });
  };

  const getPropertyDetails = () => {
    // setLoading(true);
    axiosInstance.get(`property/${id}`).then((response) => {
      return response;
    });
  };

  const saveDocuments = () => {
    const ifDocuments = getPropertyDetails();
    console.log(ifDocuments);
    // setLoading(true);
    // axiosWithAuth()
    //   .post(`property/${id}/save`)
    //   .then((response) => {
    //     console.log(response);
    //     setLoading(false);
    //     const successMessage = response.data.message;
    //     console.log(successMessage);
    //     toast.success(successMessage);
    //     location.push(`/dashboard/listings/editDetails/${id}`);
    //   });
  };
  return (
    <div className="m-auto w-11/12 mt-6">
      <div className="w-full ">
        <p className="text-2xl font-bold">Upload Documents</p>
        <div className="bg-primary w-16 h-2 ml-3"></div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <SimpleDropZone
          maximumFiles="1"
          minimumFiles="1"
          handleSubmit={handleSubmit}
          fileType="image/*,.pdf,.doc,.docx"
          buttonText="Submit"
          imageTitle="Certificate Of Occupancy"
        />
        {/* accept="image/*,.pdf,.doc,.docx" */}

        <SimpleDropZone
          maximumFiles="1"
          minimumFiles="1"
          handleSubmit={handleSubmit}
          fileType="image/*,.pdf,.doc,.docx"
          buttonText="Submit"
          imageTitle="Governor’s Consent"
        />
        <SimpleDropZone
          maximumFiles="1"
          minimumFiles="1"
          handleSubmit={handleSubmit}
          fileType="image/*,.pdf,.doc,.docx"
          buttonText="Submit"
          imageTitle="Government Gazette"
        />
        <SimpleDropZone
          maximumFiles="1"
          minimumFiles="1"
          handleSubmit={handleSubmit}
          fileType="image/*,.pdf,.doc,.docx"
          buttonText="Submit"
          imageTitle="Rent agreement"
        />
      </div>
      <div
        onClick={saveDocuments}
        // to={`/dashboard/listings/editDetails/${id}`}
        className="flex justify-center w-1/6"
      >
        <Button buttonText="Save" loading={loading} />
      </div>
    </div>
  );
};

export { DocumentUpload };
