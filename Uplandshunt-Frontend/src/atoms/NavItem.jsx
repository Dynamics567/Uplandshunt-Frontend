import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const NavItem = ({ isActive, item, className, url }) => {
  return (
    <li
      className={classNames(
        `font-semibold text-2xl text-ash mr-6 no-underline ${className}`,
        {
          "text-lightBlack underline": isActive,
        }
      )}
    >
      <Link className="no-underline" to={url}>
        {item}
      </Link>
    </li>
  );
};

export { NavItem };
