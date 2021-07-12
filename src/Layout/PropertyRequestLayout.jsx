import { PropertyRequestHeader } from "../molecules";
import { SectionWrapper } from "./SectionWrapper";

const PropertyRequestLayout = ({ children }) => {
  return (
    <>
      <SectionWrapper>
        <div className="m-auto">
          <PropertyRequestHeader />
        </div>
        <section>{children}</section>
      </SectionWrapper>
    </>
  );
};

export { PropertyRequestLayout };
