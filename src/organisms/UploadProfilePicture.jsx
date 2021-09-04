import React, { useState } from "react";

import pictureIcon from "../assets/pictureIcon.png";
import { axiosWithAuth } from "../Auth/Axios";
import { toast } from "react-toastify";
import LoadSpinnerTwo from "../templates/LoadSpinnerTwo";

const UploadProfilePicture = ({ avatar }) => {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [spinnerLoading, setSpinnerLoading] = useState(false);

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
    setSpinnerLoading(true);
    const formData = new FormData();
    formData.append("avatar", image.raw);
    axiosWithAuth()
      .post("account/profile-upload", formData)
      .then((response) => {
        const successMessage = response.data.message;
        console.log(formData, successMessage);
        toast.success(successMessage);
        setSpinnerLoading(false);
      });
  };

  return (
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
              <img
                src={avatar}
                alt="profileAvatar"
                className="rounded-full w-24"
              />
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
      <div onClick={handleUpload} className="cursor-pointer">
        {spinnerLoading ? (
          <LoadSpinnerTwo />
        ) : (
          <img
            src={pictureIcon}
            alt="pictureIcon"
            className="w-10 -mt-12 ml-20"
          />
        )}
      </div>
    </div>
  );
};

export { UploadProfilePicture };
