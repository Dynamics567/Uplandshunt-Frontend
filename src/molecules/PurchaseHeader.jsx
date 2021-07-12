import { NavLink } from "react-router-dom";
import { purchase } from "../data/subscription";

const PurchaseHeader = () => {
  return (
    <div className="flex items-center">
      {purchase.map(({ id, item, url }) => {
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

export { PurchaseHeader };
