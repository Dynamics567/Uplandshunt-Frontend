const FilterSelect = ({
  values,
  onValueChange,
  selectedValue,
  className,
  error,
  ...rest
}) => {
  return (
    <div className="mb-2">
      <select
        className={`font-semibold text-base w-full focus:outline-none px-2 py-1 mt-1 cursor-pointer${className}`}
        defaultValue={selectedValue}
        disabled={selectedValue}
        onChange={({ target: { value } }) => onValueChange(value)}
        {...rest}
      >
        {values.map(([value, text]) => (
          <option
            key={value}
            value={value}
            className="font-normal filter-option"
            style={{ display: value ? "block" : "none" }}
          >
            {text}
          </option>
        ))}
      </select>

      <span>
        <p className="text-red-500 text-sm">{error}</p>
      </span>
    </div>
  );
};

export { FilterSelect };
