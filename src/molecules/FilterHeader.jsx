import { NavLink } from "react-router-dom";

import { filter } from "../data/subscription";

const FilterHeader = () => {
  return (
    <div className="flex items-center">
      {filter.map(({ id, item, url }) => {
        return (
          <NavLink
            className="cursor-pointer"
            activeClassName="dashboard-active"
            to={url}
            key={id}
          >
            <p className="font-bold text-sm text-ash mr-8">{item}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export { FilterHeader };
