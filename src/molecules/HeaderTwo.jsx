import { Link } from "react-router-dom";

import search from "../assets/search.svg";

const HeaderTwo = () => {
  return (
    <div
      className="flex p-4 justify-between items-center"
      style={{ boxShadow: "0px 0px 4px 0px #eea7a740" }}
    >
      <Link to="/" className="" style={{ width: "40%" }}>
        Sample Logo
      </Link>

      {/* <div className="flex w-full">
        <input
          type="text"
          placeholder="Lagos"
          className="rounded-3xl rounded-r-none p-4 text-sm font-normal border"
          style={{ boxShadow: "0px 0px 4px 0px #eea7a740", width: "70%" }}
        />
        <img src={search} alt="search" />
      </div> */}
      <Link to="/login">
        <button className="text-white bg-primary rounded-md py-2 px-4 mr-6">
          Login
        </button>
      </Link>
    </div>
  );
};

export { HeaderTwo };
