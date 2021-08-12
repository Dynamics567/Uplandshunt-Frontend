const Input = ({
  placeholder,
  className,
  type,
  name,
  id,
  error,
  label,
  register,
  ...inputProps
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="text-lg font-semibold text-left">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        {...register}
        placeholder={placeholder}
        {...inputProps}
        className="w-full border border-gray-400 focus:outline-none px-2 rounded-md py-1 mt-1"
      />
      <span>
        <p className="text-red-500 text-sm"> {error}</p>
      </span>
    </div>
  );
};

export { Input };

// const Input = ({
//   placeholder,
//   className,
//   type,
//   name,
//   id,
//   error,
//   label,
//   register,
//   ...inputProps
// }) => {
//   return (
//     <div className="mb-6">
//       <label htmlFor={name} className="text-lg font-semibold text-left">
//         {label}
//       </label>
//       <input
//         type={type}
//         name={name}
//         id={id}
//         ref={register}
//         placeholder={placeholder}
//         {...inputProps}
//         className="w-full border border-gray-400 focus:outline-none px-2 rounded-md py-1 mt-1"
//       />
//       <span>
//         <p className="text-red-500 text-sm"> {error}</p>
//       </span>
//     </div>
//   );
// };

// export { Input };
