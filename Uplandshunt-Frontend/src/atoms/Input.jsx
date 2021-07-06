import React from "react";

const Input = ({ placeholder, className, type, name, id, error, label }) => {
  return (
    <div>
      <label htmlFor={name} className="font-bold text-sm pb-4">
        {label}
      </label>
      <div className={`mb-6 border border-lightAsh ${className}`}>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={`p-2 outline-none w-full text-sm text-greyTwo`}
        />
      </div>
      <span>
        <p className="text-red-500 text-sm"></p>
        {error}
      </span>
    </div>
  );
};

export { Input };
