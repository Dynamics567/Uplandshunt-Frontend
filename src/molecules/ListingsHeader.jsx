import { NavLink } from "react-router-dom";
import { listingHeader } from "../data/subscription";

const ListingsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      {listingHeader.map(({ id, item, url }) => {
        return (
          <NavLink
            className="cursor-pointer"
            activeClassName="dashboard-active"
            to={url}
            key={id}
          >
            <p className="font-bold text-lg text-ash mr-2">{item}</p>
          </NavLink>
        );
      })}
      <button className="bg-metal p-4 font-semibold text-sm rounded-md text-white">
        Boost Property
      </button>
    </div>
  );
};

export { ListingsHeader };
