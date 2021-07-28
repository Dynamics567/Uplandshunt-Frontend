import { useState } from "react";
import dropdown from "../assets/dropdown.svg";
import Option from "./Option";

const FilterOption = ({ item }) => {
  const [filterOption, setFilterOption] = useState(false);
  const toggle = () => {
    setFilterOption(!filterOption);
  };
  console.log(item);
  return (
    <>
      <div className="flex items-center mb-6" onClick={toggle}>
        <p className="font-semibold text-base" style={{ flex: "1" }}>
          {item.item}
        </p>
        <img src={dropdown} alt="dropdown" className="w-4" />
      </div>
      {filterOption && (
        <div
          className="my-4 w-1/6 absolute top-20"
          style={{ marginLeft: "10.2rem" }}
        >
          {item.options.map((options) => {
            return <Option options={options} />;
          })}
        </div>
      )}
    </>
  );
};

export default FilterOption;
