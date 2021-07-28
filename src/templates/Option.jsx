import React from "react";

const Option = ({ options }) => {
  return (
    <div className="">
      <p className="font-normal text-base bg-white shadow-md pb-4 pl-4 pt-4">
        {options.option}
      </p>
    </div>
  );
};

export default Option;
