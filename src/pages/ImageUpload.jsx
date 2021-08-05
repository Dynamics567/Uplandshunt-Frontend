import { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../Auth/Axios";
import SimpleDropZone from "../templates/SimpleDropZone";

const ImageUpload = () => {
  const location = useHistory();
  const [images, setImages] = useState([]);

  const handleChangeStatus = ({ meta }, status) => {
    // console.log(status, meta);
  };

  // Return array of uploaded files after submit button is clicked
  // const handleSubmit = (files, allFiles) => {
  //   const fileNames = files.map((file) => file.file);
  //   // console.log(fileNames);
  //   setImages(fileNames);
  //   console.log(fileNames);
  //   axiosWithAuth()
  //     .post("property/32/images", fileNames)
  //     .then((response) => {
  //       console.log(response);
  //     });
  //   // console.log(files.map((f) => setImages(f.meta.name)));
  //   // setImages(files.map((f) => f.meta));
  //   // console.log(images);
  //   allFiles.forEach((f) => f.remove());
  //   // location.push("/dashboard/listings/documentUpload");
  // };

  const handleSubmit = (files, allFiles) => {
    const fileNames = files.map((file) => file.file);
    console.log(fileNames);
    setImages(fileNames);
    axiosWithAuth()
      .post("property/1/images", images)
      .then((response) => {
        console.log(response);
      });
    // allFiles.forEach((f) => f.remove());
  };

  return (
    <div className="m-auto w-11/12 mt-6">
      <div className="w-full ">
        <p className="text-2xl font-bold">Upload Image</p>
        <div className="bg-primary w-16 h-2 ml-3"></div>
      </div>
      <p className="font-bold text-base my-2">Images Of Properties</p>
      <div className=" justify-between">
        <SimpleDropZone
          maximumFiles="7"
          minimumFiles="1"
          inputContent="Drag and drop here or browse images"
          handleSubmit={handleSubmit}
          handleChangeStatus={handleChangeStatus}
        />
        {/* <button onClick={handleSubmit} className="bg-primary p-4 text-white">
          continue
        </button> */}
      </div>
    </div>
  );
};

export { ImageUpload };
