import { SectionWrapper } from "../Layout/SectionWrapper";
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
      <SectionWrapper>
        <header className="flex justify-between items-center mb-4">
          <p>Sample Logo</p>
          <nav>
            <ul className="flex justify-between items-center list-none text-primary font-semibold text-lg">
              <li className="mr-6">Legal</li>
              <li className="mr-6">About Us</li>
              <li className="mr-6">Contact Us</li>
              <button className="border border-primary rounded-md py-2 px-4 mr-6">
                Register
              </button>
              <button className="text-white bg-primary rounded-md py-2 px-4 mr-6">
                Login
              </button>
            </ul>
          </nav>
        </header>
      </SectionWrapper>

      <main>
        <Hero />
        <SectionWrapper>
          <div className="mt-14">
            <PropertySlider title="Top Property" />
            <PropertySlider title="Boosted Property" />
            <Explore title="Explore Nigeria" />
          </div>
        </SectionWrapper>

        <section className="mt-20">
          <WhyUpland />
          <HowToSell />
          {/* <Subscription /> */}
          <DownloadApp />
        </section>
        <Footer />
      </main>
    </>
  );
};

export { Landing };
