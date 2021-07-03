import { SectionWrapper } from "../Layout";
import { Header } from "../molecules";
import { Footer } from "../organisms";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <SectionWrapper>
        <div className="">
          <p className="font-bold text-xl">Privacy Policy</p>
          <div className="bg-primary h-2 w-16 ml-4"></div>
        </div>
        <p className="font-semibold text-xl my-4 text-primary">Privacy</p>
        <div className="font-normal text-base mb-20">
          <p className="my-4">
            Welcome to Uplandshunt Privacy Policy! Uplandshunt, Inc. (“we”,
            “our”, “us”, or “Uplandshunt”) respects the privacy of its users and
            is fully committed to protect their personal data and use it in
            accordance with data privacy laws. This Privacy Policy describes how
            we collect, use, and process any personal data that we collect from
            you or you provide to us in connection with your use of our website
            (www.Uplandshunt.com) or our mobile apps and Services. By accessing
            or using our Services, you signify your understanding of the terms
            set out in this Privacy Policy. We do not knowingly collect,
            maintain, disclose, or sell the personal information about users
            under the age of sixteen (16). If you are under the age of 16,
            please do not use our Services. If you are under the age of 16 and
            have used our Services, please contact us at the email address below
            so that we may delete your personal information.
          </p>
          <p className="my-4">
            If you use our Services only for your personal use, you are to be
            considered as the “User” and for the purpose of the General Data
            Protection Regulation (“GDPR”), we are the data controller.
          </p>
          <p>
            Like many websites, we use "cookies" to enable us to personalise
            your visits to this website, simplify the signing-in procedure, keep
            track of your preferences and to track the usage of this website.
            Cookies are small pieces of information that are stored in the hard
            drive of your computer by your browser. Your browser will have the
            option to prevent websites using cookies, but please note that this
            may reduce the functionality of this Site and other website.
          </p>
        </div>
      </SectionWrapper>
      <Footer />
    </div>
  );
};

export { PrivacyPolicy };
