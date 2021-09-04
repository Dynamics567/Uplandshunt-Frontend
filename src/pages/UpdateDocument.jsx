import { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../Auth/Axios";
import SimpleDropZone from "../templates/SimpleDropZone";
import { toast } from "react-toastify";
import { useParams } from "react-router";

const UpdateDocument = () => {
  const location = useHistory();
  let { id } = useParams();

  const handleChangeStatus = ({ meta }, status) => {
    // console.log(status, meta);
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = (files) => {
    const fileNames = files.map((file) => file.file);

    const formdata = new FormData();
    formdata.append("file", fileNames[0]);
    formdata.append("document_name", "test");
    setLoading(true);
    axiosWithAuth()
      .put(`property/uploads/${id}/document`, formdata)
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
        <p className="text-2xl font-bold">Update Document</p>
        <div className="bg-primary w-16 h-2 ml-3"></div>
      </div>
      <div className="m-auto w-6/12">
        <SimpleDropZone
          maximumFiles="1"
          minimumFiles="1"
          fileType="image/*,.pdf,.doc,.docx"
          handleSubmit={handleSubmit}
          handleChangeStatus={handleChangeStatus}
          buttonText="Update"
          loading={loading}
        />
        <div className="mt-4">
          <p className="text-xs font-semibold text-ashThree">
            Document should not be more than 2MB*
          </p>
        </div>
      </div>
    </div>
  );
};

export { UpdateDocument };
