import React from "react";

const Intro = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold">Company Logo</p>
      <p className="text-xl font-bold mt-6 mb-2">{title} </p>
      <p className="text-sm font-normal">{subtitle}</p>
    </div>
  );
};

export default Intro;
