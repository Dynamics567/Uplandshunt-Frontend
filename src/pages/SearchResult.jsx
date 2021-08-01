import { useState, useEffect } from "react";
import { useParams } from "react-router";

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
  // console.log(value);
  const getFilters = () => {
    setLoading(true);
    axiosInstance
      .get("property/attributes/all")
      .then(function (response) {
        // handle success
        const category = response.data;
        const entries = Object.entries(category.data);
        // console.log(entries);
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

  // const test = () => {
  //   axiosInstance
  //     .get("property?category=&search=lekki")
  //     .then(function (response) {
  //       // handle success
  //       const results = response.data.data;
  //       console.log(response);
  //       // console.log(response.data.data);
  //     });
  // };

  // test();
  useEffect(() => {
    getFilters();
    getSearchedProperty();
  }, []);

  return (
    <div>
      {loading ? (
        <DashboardLoader />
      ) : (
        <>
          <HeaderTwo />
          <div className="m-auto mt-6 w-11/12 grid grid-cols-6 gap-6">
            <div class="col-start-1 col-end-2">
              <div className="border border-lightAsh p-2">
                <p className="font-bold text-lg border-b border-lightAsh mb-4">
                  Filter by:
                </p>
                {filterBy.map((item) => {
                  return <FilterOption item={item} />;
                })}
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
        </>
      )}
    </div>
  );
};

export { SearchResult };
