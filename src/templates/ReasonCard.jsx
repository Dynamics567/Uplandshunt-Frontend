import React from "react";

const ReasonCard = ({ photo, title, subtitle, className }) => {
  return (
    <div
      className={`flex items-center shadow-md justify-around rounded-md py-10 px-10 bg-white mr-10 ${className}`}
    >
      <img src={photo} alt={title} className="w-20 mr-8" />
      <div className="">
        <p className="font-bold text-2xl max-w-xs">{title}</p>
        <p className="font-normal font-xl text-ash max-w-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export { ReasonCard };
