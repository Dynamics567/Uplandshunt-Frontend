import search from "../assets/search.svg";
import dropdown from "../assets/dropdown.svg";

const Search = ({ placeholder, toggleDropDown }) => {
  return (
    <div className="flex w-full mt-16">
      <div className="w-full flex justify-center items-center">
        <input
          type="text"
          placeholder={placeholder}
          className={`rounded-3xl w-6/12 rounded-r-none p-4 text-sm font-normal focus:outline-none text-black cursor-pointer`}
        />
        <div
          className="flex justify-start -ml-8 cursor-pointer"
          toggleDropDown={toggleDropDown}
        >
          <img src={dropdown} alt="dropdown" className="w-4" />
        </div>
      </div>
      <div className="flex -ml-60">
        <img src={search} alt="search" className="items-end" />
      </div>
    </div>
  );
};

export { Search };
