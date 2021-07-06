import { NavLink } from "react-router-dom";

import { blogNavItems } from "../data/FooterItems";
import { SectionWrapper } from "../Layout";
import { HeaderTwo } from "../molecules";

const LegalHeader = () => {
  return (
    <div className="bg-white">
      <>
        <HeaderTwo />
        <SectionWrapper>
          <ul className="flex ml-10">
            {blogNavItems.map(({ id, item, url }) => {
              return (
                <NavLink activeClassName="legal-active" to={url} key={id}>
                  <p className="font-semibold text-2xl text-ash mr-6 no-underline">
                    {item}
                  </p>
                </NavLink>
              );
            })}
          </ul>
        </SectionWrapper>
      </>
    </div>
  );
};

export { LegalHeader };
