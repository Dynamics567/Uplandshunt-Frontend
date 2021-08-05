import React from "react";
import SimpleDropZone from "../templates/SimpleDropZone";

const DocumentUpload = () => {
  return (
    <div className="m-auto w-11/12 mt-6">
      <div className="w-full ">
        <p className="text-2xl font-bold">Upload Image</p>
        <div className="bg-primary w-16 h-2 ml-3"></div>
      </div>
      <p className="font-bold text-base my-2">Images Of Properties</p>
      <div className="flex justify-between">
        <SimpleDropZone />
        {/* <Dropzone />
        <Dropzone /> */}
      </div>
    </div>
  );
};

export { DocumentUpload };
