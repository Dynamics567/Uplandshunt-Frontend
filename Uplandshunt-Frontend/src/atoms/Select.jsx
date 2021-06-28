const Select = ({
  label,
  values,
  onValueChange,
  selectedValue,
  className,
  ...rest
}) => {
  return (
    <div className={`mb-6 border border-lightAsh ${className}`}>
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
  );
};

export { Select };
