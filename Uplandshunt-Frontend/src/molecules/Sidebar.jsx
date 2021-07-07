import React from "react";
import { NavLink } from "react-router-dom";
import { userDashboard } from "../data/FooterItems";

const Sidebar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="bg-primary h-full px-6 w-64 text-white">
      <p className="font-normal py-6 text-base text-center">Sample Logo</p>
      {userDashboard.map(({ id, image, navItem, link }) => {
        return (
          <NavLink
            activeClassName="active"
            to={link}
            className="flex items-center cursor-pointer mb-20"
            key={id}
            onClick={scrollToTop}
          >
            <img src={image} alt={navItem} className="mr-4" />
            <p className="font-bold text-base">{navItem}</p>
          </NavLink>
        );
      })}
      <p className="font-bold text-white text-base">Logout</p>
    </div>
  );
};

export { Sidebar };
