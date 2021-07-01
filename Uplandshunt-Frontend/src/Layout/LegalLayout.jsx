import { SectionWrapper } from ".";
import { LegalHeader, Footer } from "../organisms";

const LegalLayout = ({ children, text }) => {
  return (
    <>
      <div className="m-auto">
        <LegalHeader />
      </div>
      <SectionWrapper>
        <div className="text-center mt-16 mb-6">
          <p className="font-bold text-3xl text-lightBlack">{text}</p>
          <div
            className="bg-primary h-2 w-56 mt-2"
            style={{ marginLeft: "30rem" }}
          ></div>
        </div>
        <section>{children}</section>
      </SectionWrapper>
      <Footer />
    </>
  );
};

export { LegalLayout };
