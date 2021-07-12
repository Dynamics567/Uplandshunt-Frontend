import React from "react";
import { NavLink } from "react-router-dom";
import { userDashboard } from "../data/FooterItems";

const Sidebar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="bg-primary h-full w-64 text-white">
      <p className="font-normal py-6 text-base text-center">Sample Logo</p>
      <div className="flex flex-col mt-8 h-full">
        {userDashboard.map(({ id, image, navItem, link }) => {
          return (
            <NavLink
              exact
              activeClassName="active"
              to={link}
              className="flex items-center cursor-pointer ml-4 mb-20"
              key={id}
              onClick={scrollToTop}
            >
              <img src={image} alt={navItem} className="mr-4" />
              <p className="font-bold text-base" style={{ flex: "1" }}>
                {navItem}
              </p>
            </NavLink>
          );
        })}
        <p className="font-bold text-white ml-10 text-base">Logout</p>
      </div>
    </div>
  );
};

export { Sidebar };
