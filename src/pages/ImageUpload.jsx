import { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../Auth/Axios";
import SimpleDropZone from "../templates/SimpleDropZone";
import { toast } from "react-toastify";
import { useParams } from "react-router";

const ImageUpload = () => {
  const location = useHistory();
  let { id } = useParams();

  const handleChangeStatus = ({ meta }, status) => {
    // console.log(status, meta);
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = (files) => {
    const fileNames = files.map((file) => file.file);

    const formdata = new FormData();
    formdata.append("file", fileNames);
    console.log(formdata);
    setLoading(true);
    axiosWithAuth()
      .post(`property/${id}/images`, formdata)
      .then((response) => {
        const successMessage = response.data.data;
        toast.success(successMessage);
        setLoading(false);
        location.push(`/dashboard/listings/documentUpload/${id}`);
      });
  };

  return (
    <div className="m-auto w-11/12 mt-6">
      <div className="w-full ">
        <p className="text-2xl font-bold">Upload Image</p>
        <div className="bg-primary w-16 h-2 ml-3"></div>
      </div>
      <p className="font-bold text-base my-2">Images Of Properties</p>
      <div className="m-auto w-6/12">
        <SimpleDropZone
          maximumFiles="7"
          minimumFiles="5"
          fileType="image/*,png/*,svg/*,jpeg/*,jpg/*"
          handleSubmit={handleSubmit}
          handleChangeStatus={handleChangeStatus}
          buttonText="Continue"
          loading={loading}
        />
        <div className="mt-4">
          <p className="text-xs font-semibold text-ashThree">
            Image should be a JPG or PNG format upload size is 2MB*
          </p>
          <p className="text-xs font-semibold text-ashThree">
            Maximum of 7 and minimum of 5 images**
          </p>
        </div>
      </div>
    </div>
  );
};

export { ImageUpload };
