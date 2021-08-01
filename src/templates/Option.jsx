import React from "react";

const Option = ({ options }) => {
  const optionEntries = Object.values(options);

  const getName = (id) => {
    console.log(id);
  };
  return (
    <div className="">
      {optionEntries.map(({ name, id }) => {
        return (
          <div
            key={id}
            onClick={() => {
              getName(id);
            }}
          >
            <p className="font-normal text-base bg-white shadow-md pl-4">
              {name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Option;
