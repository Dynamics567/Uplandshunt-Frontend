import searchResult from "../assets/searchResult.png";
import { HeaderTwo } from "../molecules";
import { filterOptions } from "../data/filterOptions";
import FilterOption from "../templates/FilterOption";
import { TopProperties } from "./TopProperties";

const SearchResult = () => {
  return (
    <div>
      <HeaderTwo />
      <div className="m-auto mt-6 w-11/12 grid grid-cols-6 gap-6">
        <div class="col-start-1 col-end-2">
          <div className="border border-lightAsh p-2">
            <p className="font-bold text-lg border-b border-lightAsh mb-4">
              Filter by:
            </p>
            {filterOptions.map((item) => {
              return <FilterOption item={item} />;
            })}
          </div>
        </div>
        <div class="col-start-2 col-end-6">
          <img src={searchResult} alt="searchResult" />
          <img src={searchResult} alt="searchResult" />
          <img src={searchResult} alt="searchResult" />
          <img src={searchResult} alt="searchResult" />
          <img src={searchResult} alt="searchResult" />
          <img src={searchResult} alt="searchResult" />
          <img src={searchResult} alt="searchResult" />
        </div>
        <div class="col-start-6 col-end-7">
          <TopProperties />
        </div>
      </div>
    </div>
  );
};

export { SearchResult };
