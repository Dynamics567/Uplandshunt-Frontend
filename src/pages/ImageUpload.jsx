// import React from "react";
// import DragAndDrop from "../templates/DragAndDrop";

// const ImageUpload = () => {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "SET_DROP_DEPTH":
//         return { ...state, dropDepth: action.dropDepth };
//       case "SET_IN_DROP_ZONE":
//         return { ...state, inDropZone: action.inDropZone };
//       case "ADD_FILE_TO_LIST":
//         return { ...state, fileList: state.fileList.concat(action.files) };
//       default:
//         return state;
//     }
//   };
//   const [data, dispatch] = React.useReducer(reducer, {
//     dropDepth: 0,
//     inDropZone: false,
//     fileList: [],
//   });
//   return (
//     <div>
//       <DragAndDrop data={data} dispatch={dispatch} />
//       <ol className="dropped-files">
//         {data.fileList.map((f) => {
//           return <li key={f.name}>{f.name}</li>;
//         })}
//       </ol>
//     </div>
//   );
// };

// export { ImageUpload };

import React from "react";
import SimpleDropZone from "../templates/SimpleDropZone";

const ImageUpload = () => {
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

export { ImageUpload };
