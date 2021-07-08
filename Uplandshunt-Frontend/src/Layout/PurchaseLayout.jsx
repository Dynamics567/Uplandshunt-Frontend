import { PurchaseHeader } from "../molecules";
import { SectionWrapper } from "./SectionWrapper";

const PurchaseLayout = ({ children }) => {
  return (
    <>
      <SectionWrapper>
        <div className="m-auto">
          <PurchaseHeader />
        </div>
        <section>{children}</section>
      </SectionWrapper>
    </>
  );
};

export { PurchaseLayout };
