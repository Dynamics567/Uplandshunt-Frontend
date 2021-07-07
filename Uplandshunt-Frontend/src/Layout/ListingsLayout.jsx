import { SectionWrapper } from ".";
import { ListingsHeader } from "../molecules";

const ListingsLayout = ({ children, getCurrentPage }) => {
  return (
    <>
      <SectionWrapper>
        <div className="m-auto">
          <ListingsHeader onClick={getCurrentPage} />
        </div>
        <section>{children}</section>
      </SectionWrapper>
    </>
  );
};

export { ListingsLayout };
