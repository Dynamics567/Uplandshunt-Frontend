import React, { useState } from "react";

import placeholder from "../assets/placeholder.png";
import pictureIcon from "../assets/pictureIcon.png";
import { axiosWithAuth } from "../Auth/Axios";
import { toast } from "react-toastify";

const UploadProfilePicture = ({ avatar }) => {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", image.raw);
    console.log(image.raw);
    axiosWithAuth()
      .post("account/profile-upload", formData)
      .then((response) => {
        const successMessage = response.data.message;
        console.log(formData, successMessage);
        toast.success(successMessage);
      });
  };

  return (
    // <div>
    //   <label htmlFor="upload-button">
    //     {image.preview ? (
    //       <img src={image.preview} alt="dummy" width="300" height="300" />
    //     ) : (
    //       <>
    //         <span className="fa-stack fa-2x mt-3 mb-2">
    //           <i className="fas fa-circle fa-stack-2x" />
    //           <i className="fas fa-store fa-stack-1x fa-inverse" />
    //         </span>
    //         <h5 className="text-center">Upload your photo</h5>
    //       </>
    //     )}
    //   </label>
    //   <div className="cursor-pointer">
    //     <input
    //       type="file"
    //       id="upload-button"
    //       //   style={{ display: "none" }}
    //       onChange={handleChange}
    //     />
    //     <img src={placeholder} alt="profileAvatar" className="rounded-full" />
    //   </div>
    //   {/* <div className="flex flex-col items-center justify-center">
    //     <div className="">
    //     </div>
    //     <img src={pictureIcon} alt="pictureIcon" className="w-10 -mt-8 ml-10" />
    //   </div> */}
    //   <br />
    //   <div className="" onClick={handleUpload}>
    //     <img src={pictureIcon} alt="pictureIcon" className="w-10 -mt-8 ml-10" />
    //   </div>
    // </div>
    <div>
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="300" height="300" />
        ) : (
          <>
            <span className="fa-stack fa-2x mt-3 mb-2">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-store fa-stack-1x fa-inverse" />
            </span>
            <div className="cursor-pointer">
              <p>test</p>
              <img src={avatar} alt="profileAvatar" className="rounded-full" />
            </div>
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <br />
      <div onClick={handleUpload}>
        <img
          src={pictureIcon}
          alt="pictureIcon"
          className="w-10 -mt-12 ml-20"
        />
      </div>
    </div>
  );
};

export { UploadProfilePicture };
