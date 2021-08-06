import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

import cloud from "../assets/cloud.png";

const SimpleDropZone = ({
  maximumFiles,
  minimumFiles,
  handleSubmit,
  handleChangeStatus,
  fileType,
  buttonText,
  imageTitle,
}) => {
  return (
    <div className="mt-10">
      <p className="font-bold text-base mb-2">{imageTitle}</p>
      <Dropzone
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        submitButtonContent={buttonText}
        accept={fileType}
        inputContent={(files, extra) =>
          files.reject ? "Only images files allowed!" : "Select and Drop Files"
        }
        styles={{
          dropzoneReject: { borderColor: "red" },
          inputLabel: (files, extra) =>
            extra.reject ? { color: "#A02800" } : {},
          dropzone: {
            border: "2px solid white",
            boxShadow: "0px 0px 4px 0px #00000040",
            overflowX: "hidden",
            overflowY: "hidden",
          },
          inputLabel: {
            color: "#c4c4c4",
            fontSize: "16px",
            fontWeight: 600,
          },
          submitButton: (files) =>
            files.length < minimumFiles
              ? { backgroundColor: "#c4c4c4" }
              : { backgroundColor: "#B3404A" },
        }}
        maxFiles={maximumFiles}
        inputContent={
          <div className="flex flex-col justify center items-center">
            <img src={cloud} alt="cloud" className="w-8" />
            <p className="text-center">
              Drag and drop here or{" "}
              <span className="#B3404A">browse files</span>
            </p>
          </div>
        }
        inputWithFilesContent={(files) => `${maximumFiles - files.length} more`}
        submitButtonDisabled={(files) => files.length < minimumFiles}
        handleSubmit={handleSubmit}
        maxSizeBytes={2097152}
      />
    </div>
  );
};

export default SimpleDropZone;
