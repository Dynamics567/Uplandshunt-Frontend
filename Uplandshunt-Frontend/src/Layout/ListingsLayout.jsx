import { SectionWrapper } from ".";
import { ListingsHeader } from "../molecules";

const ListingsLayout = ({ children }) => {
  return (
    <>
      <SectionWrapper>
        <div className="m-auto">
          <ListingsHeader />
        </div>
        <section>{children}</section>
      </SectionWrapper>
    </>
  );
};

export { ListingsLayout };
