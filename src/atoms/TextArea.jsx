import React from "react";

const TextArea = ({ placeholder }) => {
  return (
    <div>
      <textarea
        rows="4"
        cols="56"
        placeholder={placeholder}
        className="bg-gray rounded-sm p-2 border border-lightAsh mt-6"
      ></textarea>
    </div>
  );
};

export { TextArea };
