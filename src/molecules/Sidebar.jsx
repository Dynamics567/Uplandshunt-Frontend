import React from "react";
import { Link, NavLink } from "react-router-dom";
import { userDashboard } from "../data/FooterItems";
import { useAuthDispatch, logout } from "../Context";

const Sidebar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const dispatch = useAuthDispatch();

  const handleLogout = () => {
    logout(dispatch);
    window.location.replace("/login");
  };

  return (
    <div className="w-64 bg-primary fixed top-0 left-0 right-0 bottom-0 pt-5 text-white z-10 pl-10">
      <Link
        to="/dashboard"
        className="cursor-pointer font-normal text-base text-center"
      >
        Sample Logo
      </Link>
      <div className="mt-6 space-y-10 h-4/5 ">
        {userDashboard.map(({ id, image, navItem, link }) => {
          return (
            <NavLink
              exact
              activeClassName="active"
              to={link}
              className="flex items-center cursor-pointer ml-4"
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
        <p
          onClick={handleLogout}
          className="font-bold cursor-pointer text-white ml-10 text-base"
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export { Sidebar };
