import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="my-10">
      <p className="text-primary font-bold text-2xl">{title}</p>
      <div className="bg-primary h-2 w-16"></div>
    </div>
  );
};

export { SectionTitle };
