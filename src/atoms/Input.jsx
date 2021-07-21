import classNames from "classnames";

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
      <div className="">
        <input
          type={type}
          name={name}
          id={id}
          ref={register}
          placeholder={placeholder}
          {...inputProps}
          className="w-full border border-gray-400 focus:outline-none px-2 rounded-md py-1 mt-1"
        />
      </div>
      <span>
        <p className="text-red-500 text-sm"> {error}</p>
      </span>
    </div>
  );
};

export { Input };
