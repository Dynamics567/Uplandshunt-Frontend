import { NavLink } from "react-router-dom";
import { register } from "../data/subscription";

const RegisterHeader = () => {
  return (
    <div className="flex items-center justify-around">
      {register.map(({ id, item, url }) => {
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
    </div>
  );
};

export { RegisterHeader };
