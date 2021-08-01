// import React from "react";

// const DragAndDrop = (props) => {
//   const { data, dispatch } = props;

//   const handleDragEnter = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth + 1 });
//   };
//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth - 1 });
//     if (data.dropDepth > 0) return;
//     dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
//   };
//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     e.dataTransfer.dropEffect = "copy";
//     dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
//   };
//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     let files = [...e.dataTransfer.files];

//     if (files && files.length > 0) {
//       const existingFiles = data.fileList.map((f) => f.name);
//       files = files.filter((f) => !existingFiles.includes(f.name));

//       dispatch({ type: "ADD_FILE_TO_LIST", files });
//       e.dataTransfer.clearData();
//       dispatch({ type: "SET_DROP_DEPTH", dropDepth: 0 });
//       dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
//     }
//   };
//   return (
//     <div
//       className={
//         data.inDropZone ? "drag-drop-zone inside-drag-area" : "drag-drop-zone"
//       }
//       onDrop={(e) => handleDrop(e)}
//       onDragOver={(e) => handleDragOver(e)}
//       onDragEnter={(e) => handleDragEnter(e)}
//       onDragLeave={(e) => handleDragLeave(e)}
//     >
//       <input type="file" accept="image/png, image/gif, image/jpeg" />
//       <p>Drag and drop here or</p>
//     </div>
//   );
// };
// export default DragAndDrop;

import React, { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
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
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
  });

  return (
    <div
      {...getRootProps()}
      className="mt-10 flex flex-col items-center p-6 bg-primary rounded-sm border-dashed"
    >
      <input {...getInputProps()} />
      <div>Drag and drop your images here.</div>
    </div>
  );
};

export default DragAndDrop;
