import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import search from "../assets/search.svg";
import support from "../assets/support.svg";
import dropdown from "../assets/dropdown.svg";
import { axiosInstance } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";

const Hero = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [filterBy, setFilterBy] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [getCategoryName, setGetCategoryName] = useState("");

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const getFilters = () => {
    setLoading(true);
    axiosInstance
      .get("property/attributes/all")
      .then(function (response) {
        // handle success
        const category = response.data.data.category;
        setFilterBy(category);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  // const getCategory = (name) => {
  //   return setGetCategoryName;
  // };

  useEffect(() => {
    getFilters();
  }, []);

  return (
    <>
      {loading ? (
        <DashboardLoader />
      ) : (
        <div className="hero">
          <div className="h-screen flex items-center justify-center">
            <div className="text-center capitalize text-white text-5xl leading-14 font-bold">
              <p>
                Real estate re-imagined for fast growing <br /> and dynamic
                population
              </p>
              <section className="flex w-full mt-14">
                <div className="flex justify-center items-center w-full">
                  <input
                    type="text"
                    placeholder="Search property or Filter"
                    className={`rounded-3xl w-6/12 rounded-r-none p-4 text-sm font-normal focus:outline-none text-black`}
                    onChange={(event) => setSearchValue(event.target.value)}
                  />
                  <div
                    className="flex justify-start -ml-8 cursor-pointer"
                    onClick={toggleDropDown}
                  >
                    <img src={dropdown} alt="dropdown" className="w-4" />
                  </div>
                </div>
                <Link
                  to={`/searchresults/${searchValue}/${getCategoryName}`}
                  className="w-1/4"
                >
                  <img
                    src={search}
                    alt="search"
                    className=""
                    style={{ marginLeft: "-11.9rem" }}
                  />
                </Link>
              </section>
              <div className="hero-support fixed right-8 bottom-8 top-0 inset-x-0 z-50 h-16">
                <img
                  src={support}
                  alt="support"
                  className="w-36 hero-support"
                />
              </div>
            </div>
          </div>
          {showDropDown && (
            <div
              className="flex justify-center items-center"
              style={{ marginLeft: "22rem" }}
            >
              <div className="">
                <div
                  className="align-end items-center bg-white cursor-pointer -ml-16"
                  style={{ marginTop: "-11.4rem" }}
                >
                  {filterBy.map(({ id, name }) => {
                    return (
                      <div
                        className="flex hover:bg-ashThree py-3 px-6"
                        key={id}
                        onClick={() => {
                          setGetCategoryName(() => name);
                        }}
                      >
                        <p
                          className="pr-4 pb-2 text-lg font-normal"
                          style={{ flex: "1" }}
                        >
                          {name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export { Hero };
