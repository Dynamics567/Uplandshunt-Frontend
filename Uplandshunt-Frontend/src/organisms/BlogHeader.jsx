import { Link, useLocation } from "react-router-dom";

import { NavItem } from "../atoms";
import search from "../assets/search.svg";
import { blogNavItems } from "../data/FooterItems";
import { SectionWrapper } from "../Layout";

const BlogHeader = () => {
  let isActive;
  const location = useLocation();
  const path = location.pathname.slice(1);
  const slashIndex = path.indexOf("/");

  if (path.includes("/")) {
    isActive = path.slice(0, slashIndex);
  } else {
    isActive = location.pathname.slice(1);
  }
  const isSubActive = path.slice(slashIndex + 1);
  return (
    <div className="bg-white">
      <>
        <div
          className="flex p-4 justify-between items-center"
          style={{ boxShadow: "0px 0px 4px 0px #eea7a740" }}
        >
          <p className="" style={{ width: "40%" }}>
            Sample Logo
          </p>

          <div className="flex w-full">
            <input
              type="text"
              placeholder="Lagos"
              className="rounded-3xl rounded-r-none p-4 text-sm font-normal border"
              style={{ boxShadow: "0px 0px 4px 0px #eea7a740", width: "70%" }}
            />
            <img src={search} alt="search" />
          </div>
          <Link to="/login">
            <button className="text-white bg-primary rounded-md py-2 px-4 mr-6">
              Login
            </button>
          </Link>
        </div>
        <SectionWrapper>
          <ul className="flex ml-10">
            {blogNavItems.map(({ id, item, url }) => {
              return (
                <div className="" key={id}>
                  <NavItem
                    key={id}
                    url={url}
                    isActive={location.pathname === isSubActive}
                    item={item}
                  />
                  {console.log(isActive)}
                </div>
              );
            })}
          </ul>
        </SectionWrapper>
        {/* <div className="mt-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div> */}
      </>
    </div>
  );
};

export { BlogHeader };
