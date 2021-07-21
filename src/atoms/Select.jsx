const Select = ({
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

      <select
        className="w-full border border-gray-400 focus:outline-none px-2 rounded-md py-1 mt-1"
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

      <span>
        <p className="text-red-500 text-sm">{error}</p>
      </span>
    </div>
  );
};

export { Select };
