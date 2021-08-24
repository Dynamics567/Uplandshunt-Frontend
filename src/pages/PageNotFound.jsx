import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div id="wrapper">
      <Link to="/">
        <img src="https://i.imgur.com/qIufhof.png" />
      </Link>
      <div id="info">
        <h3>This page could not be found</h3>
      </div>
    </div>
  );
};

export { PageNotFound };
