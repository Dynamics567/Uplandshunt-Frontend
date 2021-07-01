import { useLocation } from "react-router-dom";

import { NavItem } from "../atoms";
import { blogNavItems } from "../data/FooterItems";
import { SectionWrapper } from "../Layout";
import { HeaderTwo } from "../molecules";

const LegalHeader = () => {
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
        <HeaderTwo />
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
      </>
    </div>
  );
};

export { LegalHeader };
