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

import React, { useCallback, useEffect, useState, useMemo } from "react";
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
  const [files, setFiles] = useState([]);

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
  });

  const isFileTooLarge =
    rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

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

  return (
    <section>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Drag and drop your images here.</div>
      </div>
      <aside>{thumbs}</aside>
    </section>
  );
};

export default DragAndDrop;
