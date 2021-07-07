import { NavLink } from "react-router-dom";
import { listingHeader } from "../data/subscription";

const ListingsHeader = ({ getCurrentPage }) => {
  // const getCurrentPage = (id) => {
  //   return id;
  // };
  return (
    <div className="flex">
      {listingHeader.map(({ id, item, url }) => {
        return (
          <NavLink
            className="cursor-pointer"
            activeClassName="legal active"
            to={url}
            key={id}
            onClick={() => getCurrentPage(id)}
          >
            <p className="font-bold text-lg text-ash mr-10">{item}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export { ListingsHeader };
