import React from "react";
import { useLocation } from "react-router-dom";

import NavItem from "../atoms/NavItem";

const Submenu = ({ item, index }) => {
  const location = useLocation();
  return (
    <NavItem
      key={index}
      isActive={location.pathname === item.url}
      item={item}
    />
  );
};

export { Submenu };
