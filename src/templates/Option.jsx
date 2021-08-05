import React from "react";

const Option = ({ options, onClick }) => {
  const optionEntries = Object.values(options);
  // console.log(optionEntries);
  // const getName = (id) => {
  //   console.log(id);
  // };
  return (
    <div className="">
      <div
        // onClick={() => {
        //   getName(id);
        // }}
        onClick={() => onClick("")}
      >
        <p className="cursor-pointer font-normal text-base bg-white shadow-md pb-2">
          All
        </p>
      </div>
      {optionEntries.map(
        ({ name, bathroom, id, bedroom, kitchen, city, country }) => {
          return (
            <div
              key={id}
              // onClick={() => {
              //   getName(id);
              // }}
              onClick={() =>
                onClick(
                  name || bathroom || bedroom || kitchen || city || country
                )
              }
            >
              <p className="font-normal text-base bg-white shadow-md pb-2">
                {name || bathroom || bedroom || kitchen || city || country}
              </p>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Option;
