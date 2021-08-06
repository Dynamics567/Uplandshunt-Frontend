import React from "react";
import SimpleDropZone from "../templates/SimpleDropZone";
import { useParams } from "react-router";

import { Button } from "../atoms";
import { axiosWithAuth } from "../Auth/Axios";

const DocumentUpload = () => {
  let { id } = useParams();

  const handleSubmit = (files, allFiles) => {
    const fileNames = files.map((file) => file.file);

    console.log(fileNames);
    const formdata = new FormData();
    formdata.append("file", fileNames);
    formdata.append("document_name", "Government certificate");
    console.log(formdata);
    // console.log(formdata);
    axiosWithAuth()
      .post(`property/${id}/documents`, formdata)
      .then((response) => {
        const successMessage = response;
        console.log(successMessage);
        // toast.success(successMessage);
        // location.push("/dashboard/listings/documentUpload");
      });
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
          fileType="application/pdf"
          buttonText="Submit"
          imageTitle="Certificate Of  Occupancy "
        />
        <SimpleDropZone
          maximumFiles="1"
          minimumFiles="1"
          imageTitle="Governor’s Consent"
        />
        <SimpleDropZone
          maximumFiles="1"
          minimumFiles="1"
          imageTitle="Government Gazette"
        />
        <SimpleDropZone
          maximumFiles="1"
          minimumFiles="1"
          imageTitle="Rent agreement"
        />
      </div>
      <div className="flex justify-center w-1/6">
        <Button buttonText="Save" />
      </div>
    </div>
  );
};

export { DocumentUpload };
