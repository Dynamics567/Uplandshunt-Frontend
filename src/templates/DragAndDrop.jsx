import React, { useCallback, useEffect, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

import cloud from "../assets/cloud.png";
import bin from "../assets/bin.png";
import { axiosWithAuth } from "../Auth/Axios";

const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  backgroundColor: "#ffffff",
  transition: "border .3s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const DragAndDrop = (props) => {
  const [files, setFiles] = useState([]);

  // To preview file
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const maxSize = 2097152;
  // console.log(files);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    rejectedFiles,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
    minSize: "0",
    maxSize: { maxSize },
    multiple,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept, rejectedFiles]
  );

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <img src={file.preview} alt={file.name} />
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const removeImage = (file) => {
    const newFiles = [...files]; // make a var for the new array
    newFiles.splice(file, 1); // remove the file from the array
    setFiles(newFiles); // update the state
  };

  // var formData = new FormData();
  // formData.append("myimages", files);

  const handleDrop = () => {
    console.log(files);
    axiosWithAuth()
      .post("property/images", files)
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <>
      <section className="mr-4 rounded-sm bg-white">
        <div className="flex" style={{ justifyContent: "flex-end" }}>
          <img
            src={bin}
            alt="bin"
            className="self-end w-4 cursor-pointer"
            onClick={removeImage}
          />
        </div>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <div className="flex flex-col justify-center p-10">
            <div className="flex justify-center">
              <img src={cloud} alt="cloud" className="w-8" />
            </div>
            <p className="font-semibold text-base cursor-pointer">
              Drag and drop here or {""}
              <span className="text-primary">browse images </span>
            </p>
          </div>
        </div>
        <p className="text-ashfont-semibold text-xs mt-4">
          Image should be a JPG or PNG format*
        </p>
        <div>{thumbs}</div>
        <button onClick={handleDrop} className="bg-primary">
          upload
        </button>
      </section>
    </>
  );
};

export default DragAndDrop;
