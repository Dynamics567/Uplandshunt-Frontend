import { SubTitle } from "../atoms";
import { SectionWrapper } from "../Layout/SectionWrapper";
import roadmap from "../assets/roadmap.svg";

const HowToSell = () => {
  return (
    <SectionWrapper>
      <div className="mb-20">
        <SubTitle text="How to buy and sell" className="text-center" />
        <img src={roadmap} alt="roadmap" />
      </div>
    </SectionWrapper>
  );
};

export { HowToSell };
