import { SectionWrapper } from "../Layout";
import { Header } from "../molecules";
import aboutGroup from "../assets/aboutGroup.png";
import focus from "../assets/focus.svg";
import target from "../assets/target.svg";
import { services, values } from "../data/values";
import { Footer } from "../organisms";

const About = () => {
  return (
    <div>
      <Header />
      <SectionWrapper>
        <div className="">
          <p className="font-bold text-xl">About Us</p>
          <div className="bg-primary h-2 w-12 ml-4"></div>
        </div>
        <p className="font-semibold text-3xl my-6">Real Estate Re- Imagined</p>
        <div className="flex items-center">
          <div className="flex-grow w-16 mr-4">
            <p className="font-normal text-base mb-4">
              Uplands hunt is a leading software driven hub, privately held and
              incoporated in Nigeria. We provide bespok solutions across a range
              of real estate services to owners, occupiers and investors. Our
              principal vision was to purchase, sell, lease, rent a property in
              Nigeria from any part of the world at any time. We offer high
              performing solutions built around a culture of innovation,
              distinguished by service excellence and longstanding client
              relationships with an integration of landlords and
              tenants/builders and buyers tailored to provide a safe, secure,
              swift and reliable bespoke, seamless and hassle-free service to
              our client even to real estate enthusiast.
            </p>
            <p className="font-normal text-base mb-4">
              Our company is not confined by traditional real estate boundaries
              when it comes to buying, selling, leasing or asset management. We
              are constantly coming upon with innovative ways to satisfy our
              client’s need. Our in-house knowledge combined with strategic
              patnerships allows us to promptly meet client expectations with an
              integrated bidding system that permits buyers and tenants to bid
              for properties directly with the landlord on the best deal.
            </p>
            <p className="font-normal text-base mb-4">
              Uplands hunt hybrid system allows exchange of figures alone
              without necessarily a conversation. No words but coordinated color
              indicator, day timer to show when bidding end and sends a detailed
              transaction report through our backend.
            </p>
          </div>
          <div className="flex-none" style={{ width: "26rem" }}>
            <img src={aboutGroup} alt="aboutGroup" />
          </div>
        </div>
      </SectionWrapper>
      <div className="bg-primary my-14 p-16 text-center text-white flex justify-between w-full">
        <section style={{ flex: "1" }}>
          <div className="flex items-center justify-center mb-6">
            <img src={target} alt="target" className="mr-4" />
            <p className="font-semibold text-3xl">Our Mission</p>
          </div>
          <p className="font-normal text-base max-w-sm ml-20">
            To be the most successful luxury real estate listings plaform in the
            world using cutting edge technology and hybrid intelligence software
            to ensure seamless local and transatlantic transactions.
          </p>
        </section>
        <section style={{ flex: "1" }}>
          <div className="flex items-center justify-center mb-6">
            <img src={focus} alt="focus" className="mr-4" />
            <p className="font-semibold text-3xl">Our Vision</p>
          </div>
          <p className="font-normal text-base max-w-lg ml-20">
            To expand our services based on core strength, unrivaled local
            expertise and extensive local and international network with the use
            of our software artificial intelligence, blockchain technology and
            supportd smart contracts with the simple goal to initiate, engage
            and execute properties operation from anywhere in the world at the
            tip of your finger.
          </p>
        </section>
      </div>
      <section>
        <SectionWrapper>
          <div className="text-center m-auto w-11/12">
            <p className="font-semibold text-3xl pb-20">Our Values</p>
            <div className="flex justify-between w-full pb-28">
              {values.map(({ id, image, title, note }) => {
                return (
                  <div className="mr-10" key={id} style={{ flex: "1" }}>
                    <div className="flex justify-center items-center">
                      <img src={image} alt="icon" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-primary text-sm py-2">
                        {title}
                      </p>
                      <p className="font-normal text-base">{note}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionWrapper>
        <section style={{ boxShadow: "0px 0px 4px 0px #eea7a740" }}>
          <div className="text-center m-auto w-11/12">
            <p className="font-semibold text-3xl pb-20 pt-8">Our Services</p>
            <div className="flex justify-between w-full pb-28">
              {services.map(({ id, title, image }) => {
                return (
                  <div className="" key={id}>
                    <div className="flex justify-center items-center">
                      <img src={image} alt="icon" />
                    </div>
                    <p className="font-bold text-primary text-sm py-2">
                      {title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export { About };
