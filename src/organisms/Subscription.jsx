import React from "react";
import { SectionTitle } from "../atoms";
import { SectionWrapper } from "../Layout/SectionWrapper";
import SubCard from "../templates/SubCard";
import bronze from "../assets/bronze.svg";
import plan from "../assets/plan.svg";
import bronzeBg from "../assets/bronzeBg.svg";

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
            bgImage={bronzeBg}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Subscription };
