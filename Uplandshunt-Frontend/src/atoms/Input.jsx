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
      <label htmlFor={name} className="font-bold text-sm pb-4">
        {label}
      </label>
      <div
        className={classNames(`border border-lightAsh ${className}`, {
          "border border-red-500": error,
        })}
      >
        <input
          type={type}
          name={name}
          id={id}
          ref={register}
          placeholder={placeholder}
          {...inputProps}
          className={`p-2 outline-none w-full text-sm text-greyTwo`}
        />
      </div>
      <span>
        <p className="text-red-500 text-sm"> {error}</p>
      </span>
    </div>
  );
};

export { Input };
