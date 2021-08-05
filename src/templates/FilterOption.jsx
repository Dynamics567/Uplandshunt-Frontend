import { useState } from "react";
import dropdown from "../assets/dropdown.svg";
import Option from "./Option";

const FilterOption = ({ item, setQueryParameter, queryParameter }) => {
  const [filterOption, setFilterOption] = useState(false);
  const toggle = () => {
    setFilterOption(!filterOption);
  };
  // console.log(item);
  return (
    <>
      <div
        className="flex items-center mb-6"
        onClick={toggle}
        onBlur={() => setFilterOption(false)}
        tabIndex="0"
      >
        <p className="font-semibold text-base" style={{ flex: "1" }}>
          {item[0].charAt(0).toUpperCase() + item[0].slice(1)}
        </p>
        <img src={dropdown} alt="dropdown" className="w-4" />
      </div>
      {filterOption && (
        <div
          className="my-4 w-1/6 absolute top-20"
          style={{ marginLeft: "10.2rem" }}
        >
          {item.map((options) => {
            return (
              <Option
                options={options}
                onClick={(name) =>
                  setQueryParameter({ ...queryParameter, [item[0]]: name })
                }
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default FilterOption;
