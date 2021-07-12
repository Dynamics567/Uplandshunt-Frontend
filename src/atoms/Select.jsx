const Select = ({
  label,
  values,
  onValueChange,
  selectedValue,
  className,
  labelName,
  error,
  ...rest
}) => {
  return (
    <div className="mb-6">
      <label className="font-bold text-sm pb-4">{labelName}</label>
      <div className={`border border-lightAsh ${className}`}>
        <select
          className="p-2 w-full bg-white"
          defaultValue={selectedValue}
          onChange={({ target: { value } }) => onValueChange(value)}
          {...rest}
        >
          {values.map(([value, text]) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
      </div>
      <span>
        <p className="text-red-500 text-sm">{error}</p>
      </span>
    </div>
  );
};

export { Select };
