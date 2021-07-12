import search from "../assets/search.svg";

const Search = ({ placeholder, className }) => {
  return (
    <div className="flex w-full justify-center mt-16">
      <input
        type="text"
        placeholder={placeholder}
        className={`rounded-3xl rounded-r-none p-4 text-sm font-normal ${className}`}
      />
      <img src={search} alt="search" />
    </div>
  );
};

export { Search };
