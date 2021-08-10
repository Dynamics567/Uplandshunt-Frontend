import { SectionWrapper } from "../Layout/SectionWrapper";
import { Header } from "../molecules";
import {
  Hero,
  PropertySlider,
  Explore,
  HowToSell,
  Subscription,
  DownloadApp,
  Footer,
} from "../organisms";
import WhyUpland from "../templates/WhyUpland";

const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionWrapper>
          <div className="mt-14">
            <PropertySlider title="Top Property" category="top" />
            {/* <PropertySlider title="Boosted Property" category="boosted/all" /> */}
            <Explore title="Explore Nigeria" />
          </div>
        </SectionWrapper>

        <section className="mt-20">
          <WhyUpland />
          <HowToSell />
          <Subscription />
          <DownloadApp />
        </section>
        <Footer />
      </main>
    </>
  );
};

export { Landing };
