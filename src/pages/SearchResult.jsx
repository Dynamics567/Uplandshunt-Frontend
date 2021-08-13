import { useState, useEffect } from "react";
import { useParams } from "react-router";

import dropdown from "../assets/dropdown.svg";
import { HeaderTwo } from "../molecules";
import FilterOption from "../templates/FilterOption";
import { TopProperties } from "./TopProperties";
import { axiosInstance } from "../Auth/Axios";
import DashboardLoader from "../templates/DashboardLoader";
import { SingleSearchResult } from "../templates/SingleSearchResult";

const SearchResult = () => {
  let { value, category } = useParams();
  const [filterBy, setFilterBy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [queryParameter, setQueryParameter] = useState({
    category: "",
    availability: "",
    amenity: "",
    bathroom: "",
    bedroom: "",
    deposit_structure: "",
    furnish_type: "",
    kitchen: "",
    type: "",
    city: "",
    country: "",
    date: "",
    listed_by: "",
  });
  // console.log(value);
  const getFilters = () => {
    setLoading(true);
    axiosInstance
      .get("property/attributes/all")
      .then(function (response) {
        // handle success
        const category = response.data;
        const entries = Object.entries(category.data);
        console.log(entries);
        setFilterBy(entries);
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

  const getSearchedProperty = () => {
    axiosInstance
      // .get(`property?search=${value}`)
      .get(`property?category=${category || ""}&search=${value || ""}`)
      .then(function (response) {
        // handle success
        const results = response.data.data;
        setSearchResults(results);
        setLoading(false);
        // console.log(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  // test();
  useEffect(() => {
    getFilters();
    getSearchedProperty();
  }, []);

  useEffect(() => {
    console.log(queryParameter);
  }, [queryParameter]);

  const searchParameters = () => {
    setLoading(true);
    const queryUrl = Object.entries(queryParameter)
      .filter((item) => item[1])
      .map((item) => item.join("="))
      .join("&");

    axiosInstance
      // .get(`property?search=${value}`)
      .get(`property?${queryUrl}`)
      .then(function (response) {
        // handle success
        const results = response.data.data;
        setSearchResults(results);
        setLoading(false);
        // console.log(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <div>
      {loading ? (
        <DashboardLoader />
      ) : (
        <>
          <HeaderTwo />
          <div className="m-auto mt-6 w-11/12">
            <div className="mb-8 w-full flex items-center justify-between">
              <div className="flex items-center">
                <section className="border-white rounded-md p-2 shadow-md mr-6">
                  <p className="font-bold text-base">
                    Result: <span className="font-normal">1- 9 of 500</span>
                  </p>
                </section>
                <button className="font-bold text-base text-white bg-primary p-2">
                  Reset Filter
                </button>
              </div>

              <div className="flex items-center border-white rounded-md py-2 px-6 shadow-md cursor-pointer">
                <p className="font-bold text-base">
                  Sort by:{" "}
                  <span className="font-normal">Price high to low</span>
                </p>
                <img src={dropdown} alt="dropdown" className="ml-2" />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-6">
              <div class="col-start-1 col-end-2">
                <div className="border border-lightAsh p-2">
                  <p className="font-bold text-lg border-b border-lightAsh mb-4">
                    Filter by:
                  </p>
                  {filterBy.map((item) => {
                    return (
                      <FilterOption
                        setQueryParameter={setQueryParameter}
                        queryParameter={queryParameter}
                        item={item}
                      />
                    );
                  })}
                  <button
                    onClick={searchParameters}
                    className="bg-primary text-white p-4"
                  >
                    search
                  </button>
                </div>
              </div>
              <div class="col-start-2 col-end-6">
                {searchResults.map((searches) => {
                  return <SingleSearchResult searches={searches} />;
                })}
              </div>
              <div class="col-start-6 col-end-7">
                <TopProperties />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export { SearchResult };
