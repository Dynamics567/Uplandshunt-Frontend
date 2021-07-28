const HeroSelect = ({
  values,
  onValueChange,
  selectedValue,
  className,
  labelName,
  error,
  ...rest
}) => {
  return (
    <div className="mb-6 hero">
      <label className="text-lg font-semibold text-left">{labelName}</label>

      <select
        className={`w-full border border-gray-400 focus:outline-none px-12 py-2 mt-1 ${className}`}
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

export { HeroSelect };
