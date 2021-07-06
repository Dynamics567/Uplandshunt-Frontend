import React from "react";
import { SectionTitle } from "../atoms";
import { SectionWrapper } from "../Layout/SectionWrapper";
import SubCard from "../templates/SubCard";
import bronze from "../assets/bronze.svg";
import silver from "../assets/silver.svg";
import plan from "../assets/plan.svg";
// import gold from "../assets/silver.svg";
import bronzeBg from "../assets/bronzeBg.svg";
// import card10 from "../assets/card10.png";
// import silverBg from "../assets/silverBg.svg";
import goldBg from "../assets/goldBg.svg";

const Subscription = () => {
  return (
    <SectionWrapper>
      <div className="my-20">
        <div className="flex justify-between">
          <SectionTitle title="Subscription" />
          <img src={plan} alt="plan" />
        </div>
        <div className="w-full flex justify-between my-20">
          <SubCard
            category="Bronze"
            icon={bronze}
            amount="$10.00"
            note="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            note1="It is a long established"
            note2="It is a long established"
            note3="It is a long established"
            bgImage={bronzeBg}
          />
          <SubCard
            category="Silver"
            icon={silver}
            amount="$10.00"
            note="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            note1="It is a long established"
            note2="It is a long established"
            note3="It is a long established"
            bgImage={bronzeBg}
            className="-mt-10"
          />
          <SubCard
            category="Gold"
            icon={bronze}
            amount="$10.00"
            note="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
            note1="It is a long established"
            note2="It is a long established"
            note3="It is a long established"
            bgImage={goldBg}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Subscription };
