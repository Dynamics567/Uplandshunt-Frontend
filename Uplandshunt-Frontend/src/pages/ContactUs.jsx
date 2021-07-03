import { Input, SectionTitle, TextArea } from "../atoms";
import { SectionWrapper } from "../Layout";
import { Header } from "../molecules";
import { Footer } from "../organisms";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <SectionWrapper>
        <div className="flex mt-14">
          <section>
            <SectionTitle title="Get In Touch" />
            <p className="my-6 font-semibold text-2xl text-lightBlack">
              We are just few calls away.
            </p>
            <p className="font-normal text-lg max-w-lg">
              Kindly fill the form below. we will get back to you as soon as
              possible
            </p>
          </section>
          <section className="mt-14">
            <div className="flex w-full">
              <div className="w-1/2 mr-8">
                <label htmlFor="Password" className="font-bold text-sm pb-4">
                  Email Address
                </label>
                <Input placeholder="example@example.com" type="email" />
              </div>
              <div className="w-1/2">
                <label htmlFor="Password" className="font-bold text-sm pb-4">
                  Contact Number
                </label>
                <Input placeholder="00000000" type="text" />
              </div>
            </div>
            <TextArea placeholder="Message" />
            <button className="rounded-md p-4 text-white bg-primary font-semibold w-1/2 mt-8">
              Submit
            </button>
          </section>
        </div>
      </SectionWrapper>
      <Footer />
    </div>
  );
};

export { ContactUs };
