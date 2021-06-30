import React from "react";

import mockup from "../assets/mockup.svg";
import appStore from "../assets/appStore.svg";
import googlePlay from "../assets/googlePlay.svg";
import { SectionWrapper } from "../Layout";

const DownloadApp = () => {
  return (
    <>
      <div className="mt-56 mb-36 bg-maroon w-full" style={{ height: "417px" }}>
        <SectionWrapper>
          <div className="py-14 flex flex-col items-end pt-20">
            <p className="font-bold text-2xl my-4 text-white">
              Download app to enjoy more!
            </p>
            <p className="font-normal text-base text-white text-center max-w-sm">
              You can get our app on any of the play stores. Download for free
              and enjoy your experience while using it.
            </p>
            <div className="flex justify-between mt-8 mr-12">
              <img src={googlePlay} alt="googlePlay" className="w-36" />
              <img src={appStore} alt="appStore" className="w-36" />
            </div>
          </div>
        </SectionWrapper>
      </div>
      <SectionWrapper>
        <div className="">
          <img src={mockup} alt="mockup" style={{ marginTop: "-42rem" }} />
        </div>
      </SectionWrapper>
    </>
  );
};

export { DownloadApp };
