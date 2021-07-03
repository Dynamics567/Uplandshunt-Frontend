import { privacyPolicy } from "../data/values";
import { SectionWrapper } from "../Layout";
import { Header } from "../molecules";
import { Footer } from "../organisms";

const TermsAndConditions = () => {
  return (
    <div>
      <Header />
      <SectionWrapper>
        <div className="mt-10">
          <p className="font-bold text-2xl">Terms and Conditions</p>
          <div className="bg-primary h-2 w-20 ml-14"></div>
        </div>
        <div className="mt-6">
          {privacyPolicy.map(({ id, title, note }) => {
            return (
              <div className="mb-4" key={id}>
                <p className="text-primary font-semibold text-xl mb-2">
                  {title}
                </p>
                <p className="font-normal text-base leading-relaxed">{note}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
      <Footer />
    </div>
  );
};

export { TermsAndConditions };
