import React from "react";

const Intro = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <p className="text-3xl font-semibold mb-5 text-center">Company Logo</p>
      <p className="text-2xl font-semibold mb-3 text-center ">{title} </p>
      <p className="text-lg text-center">{subtitle}</p>
    </div>
  );
};

export default Intro;
