import { NavLink } from "react-router-dom";
import { propertyRequest } from "../data/subscription";

const PropertyRequestHeader = () => {
  return (
    <div className="flex items-center">
      {propertyRequest.map(({ id, item, url }) => {
        return (
          <NavLink
            className="cursor-pointer"
            activeClassName="dashboard-active"
            to={url}
            key={id}
          >
            <p className="font-bold text-lg text-ash mr-8">{item}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export { PropertyRequestHeader };
