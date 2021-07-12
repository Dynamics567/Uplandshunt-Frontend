import { useHistory } from "react-router-dom";

import { HeaderTwo } from "../molecules";
import { SectionWrapper } from "./SectionWrapper";
import leftArrow from "../assets/leftArrow.svg";
import { Footer } from "../organisms";

const SingleLegalLayout = ({ children, text, author }) => {
  const history = useHistory();

  return (
    <div>
      <HeaderTwo />
      <SectionWrapper>
        <div
          className="cursor-pointer flex items-center po"
          onClick={() => {
            history.goBack();
          }}
        >
          <img src={leftArrow} alt="" />
          Back
        </div>
        <p className="mt-6 mb-2 font-semibold text-3xl text-lightBlack">
          {text}
        </p>
        <p className="font-normal text-lightBlack text-2xl">{author}</p>
        {children}
      </SectionWrapper>
      <Footer />
    </div>
  );
};

export { SingleLegalLayout };
