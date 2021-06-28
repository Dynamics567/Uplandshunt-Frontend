import React from "react";

const SubTitle = ({ text, className }) => {
  return (
    <div>
      <p
        className={`text-primary font-bold text-2xl mb-14 tracking-wide ${className}`}
      >
        {text}
      </p>
    </div>
  );
};

export { SubTitle };
