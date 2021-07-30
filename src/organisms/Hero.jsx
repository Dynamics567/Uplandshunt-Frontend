import { useState, useEffect } from "react";

import support from "../assets/support.svg";
import { Search } from "../atoms";
import { axiosInstance } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";

const Hero = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [filterBy, setFilterBy] = useState([]);
  const [loading, setLoading] = useState(false);

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
              <div
                className="inline-flex w-full cursor-pointer"
                onClick={toggleDropDown}
              >
                <Search
                  placeholder="Search property or Filter"
                  className="w-2/6"
                />
              </div>
              <div className="hero-support fixed top-0 inset-x-0 z-50 h-16">
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
                  className="align-end items-center bg-white py-3 px-6 cursor-pointer -ml-16"
                  style={{ marginTop: "-11.4rem" }}
                >
                  {filterBy.map((filterOption) => {
                    return (
                      <div className="flex" key={filterOption.id}>
                        <p
                          className="pr-4 pb-2 text-lg font-normal"
                          style={{ flex: "1" }}
                        >
                          {filterOption.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {/* {secondDropDown && (
          <div className="flex justify-center cursor-pointer">
            <div
              className="my-4 absolute top-96 right-44"
              style={{ marginTop: "5.4rem", marginRight: ".2rem" }}
            >
              {heroFilter.map(({ id, item }) => {
                return (
                  <div key={id} className="bg-white p-3 hover:bg-ashThree">
                    <Link to="/searchresults" className="font-normal text-base">
                      {item}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )} */}
        </div>
      )}
    </>
  );
};

export { Hero };
